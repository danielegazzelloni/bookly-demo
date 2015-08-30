/* 
 * Config settings
 * 
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */


var google      = require('googleapis');
var config      = require('./config');
var logger      = require('./logger');
var drive       = google.drive('v2');

var OAuth2Cli   = null;



var getAccessUrl = function (redirectUrl, callback) {
    var data = {
        api: "getAccessUrl",
        result: "",
        url : "",
        message : ""
    };
    
    try {
        var OAuth2  = google.auth.OAuth2;
        OAuth2Cli   = new OAuth2(
                config.oauth_credentials.client_id, 
                config.oauth_credentials.client_secret, 
                config.oauth_credentials.accessTokenRedirect
        );

        // Full, permissive scope to access all of a user's files.
        var scopes = [
            'https://www.googleapis.com/auth/drive'
        ];

        var url = OAuth2Cli.generateAuthUrl({
            access_type: 'online', // 'online' (default) or 'offline' (gets refresh_token)
            scope: scopes           // If you only need one scope you can pass it as string
        });
        
        // Everything's done
        data.result = config.result_ok;
        data.url = url;
    }
    catch (e) {
        data.result = config.result_error;
        data.message = e;
        logger.log("*", "getAccessUrl error: GDrive: "+e);
    } 
    finally {
        callback(data);
    }
};


var getAccessToken = function (accessCode, callback) {
    var data = {
        api: "getAccessToken",
        result: config.result_ok,
        message : ""
    };
    
    if (accessCode == null || accessCode === '') {
        data.message = "No access code provided";
        data.result = config.result_error;
        
        callback(data);
    } else {
        OAuth2Cli.getToken(accessCode, function (err, tokens) {
            // Now tokens contains an access_token and an optional refresh_token. Save them.
            if (!err) {
                OAuth2Cli.setCredentials(tokens);
                google.options({ auth: OAuth2Cli }); // set auth as a global default
            } else {
                data.result = config.result_error;
            }
            callback(data);
        });
    }
};


var getFiles = function (res, callback) {
    var res = {
        api: "getFiles",
        result: config.result_ok,
        filelist: {}
    };
    
    // If OAuth2Cli is null or expired, re-authenticate
    if (OAuth2Cli === null) {
        logger.log("*", "getFiles: requesting authentication...");
        callback(null);
    } else {
        drive.files.list({}, function (err, res) {
            callback(res);
        });
    }

};



exports.getAccessUrl    = getAccessUrl;
exports.getAccessToken  = getAccessToken;
exports.getFiles        = getFiles;