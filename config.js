/* 
 * Config settings
 * 
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */

// Internal settings
exports.tempPath                = "/tmp/";
exports.server_port             = 8081;
exports.appname                 = "Bookly";
exports.result_ok               = "OK";
exports.result_error            = "ERROR";


// Logging
exports.verboseLogging          = false;    // Filter only important messages if true



// GDrive OAuth2 settings
exports.oauth_credentials = {   
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    client_secret: "z4FWsye6u7KtnfQ1h0-2iafR",
    client_id: "281478549797-7nnn09lf36fs6gfiu5qq93lcdu6fgfnf.apps.googleusercontent.com",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    client_email: "281478549797-7nnn09lf36fs6gfiu5qq93lcdu6fgfnf@developer.gserviceaccount.com",
    redirect_uris: ["https://localhost/oauth2callback"],
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/281478549797-7nnn09lf36fs6gfiu5qq93lcdu6fgfnf@developer.gserviceaccount.com",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    javascript_origins: ["https://localhost/"],
    accessTokenRedirect: "http://localhost:8081/getAccessToken"
};