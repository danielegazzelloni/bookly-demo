/**
 * API-ENDPOINT
 * 
 * @author: Daniele Gazzzelloni
 */


// BASE SETUP
// ==============================================

var express     = require('express');
var app         = express();
var config      = require('./config');
var logger      = require('./logger');
var multer      = require('multer');
var port        = process.env.PORT || config.server_port;
var bodyParser  = require('body-parser');

var gdrive      = require('./gdrive');


// Access-Control directives
var allowCrossDomain = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

// generate an unique app id
app.ID          = logger.appID;

// app config
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support url encoding
    extended: true
}));
/*app.use(multer({
    dest: config.tempPath,
    inMemory: true
}));*/
app.use(allowCrossDomain);
app.use('/', express.static("./public/"));


// NEED TO CHANGE THAT
var redirectUrl = "http://localhost:8081/";



// ROUTES
// ==============================================


app.get('/gdrive_authenticate', function(req, res){
    gdrive.getAccessUrl(req.query.redirectUrl, function(data) {
        if (data.result === config.result_ok) {
            res.redirect(data.url);
        } else {
            res.send(data.message);
        }
    });
    logger.log(">", "/gdrive_authenticate service called.");
});

app.get('/getAccessToken', function(req, res){
    gdrive.getAccessToken(req.query.code, function(data) {
        if (data.result === config.result_ok) {
            if (redirectUrl) {
                res.redirect(redirectUrl);
            }
        }
    });
    logger.log(">", "/getAccessToken service called.");
});

app.get('/getFiles', function(req, res){
    gdrive.getFiles(res, function(data) {
        if (data === null ) {
            redirectUrl = "http://localhost:8081/getFiles";
            res.redirect("/gdrive_authenticate");
        } else {
            message = "THIS IS YOUR FILE LISTING FOR YOU GDRIVE ROOT FOLDER:<br/><br/> ";
            res.send(message+JSON.stringify(data));
        }
    });
    logger.log(">", "/getFiles service called.");
});


// STARTING SERVER
// ==============================================

var server = app.listen(port, function(){
    logger.log("*", "listening on port "+server.address().port+".");
});