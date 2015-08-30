/* 
 * Logger module.
 * 
 * @author: Daniele Gazzzelloni <daniele@danielegazzelloni.com>
 */

var config      = require('./config');

{
    var appID;
    
    var ID          = "";
    var app_chunks  = (config.appname).split("-");
    for(var x=0; x<app_chunks.length; x++){
        ID += app_chunks[x].substr(0, 1);
    }
    ID += Math.random().toString(36).substr(2, 9);
    appID = ID.toUpperCase();
}

var generateJSONID = function(){
    return "JS"+Math.random().toString(36).substr(2, 9).toUpperCase();
};

var log = function(type, message){
    if (config.verboseLogging === false) {
        console.log("%s %s: %s", type, appID, message);
    } else if (type === "*") {
        console.log("%s %s: %s", type, appID, message);
    }
};

var generateTimeStamp = function(){
    var d = new Date();
    var data = "";
    data += (d.getDate()<10 ? "0"+d.getDate() : d.getDate()).toString();
    data += ((d.getMonth()+1)<10  ? "0"+(d.getMonth()+1) : d.getMonth()+1).toString();
    data += d.getFullYear().toString().substr(2, 3);
    data += (d.getHours()<10 ? "0"+d.getHours() : d.getHours()).toString();
    data += (d.getMinutes()<10 ? "0"+d.getMinutes() : d.getMinutes()).toString();
    data += (d.getSeconds()<10 ? "0"+d.getSeconds() : d.getSeconds()).toString();

    return data;
};

// format current time to: 'dd-mm-yyyy hh24:mi:ss'
var currentTime = function(){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth()+1; // zero-index based
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    
    var ts = (d>9 ? d : "0"+d) + "-" + (m>9 ? m : "0"+m) + "-";
    ts += date.getFullYear() + " " + (h>9 ? h : "0"+h) + ":";
    ts += (mi>9 ? mi : "0"+mi) + ":" + (s>9 ? s : "0"+s);
    return ts;
};


exports.generateJSONID          = generateJSONID;
exports.generateTimeStamp       = generateTimeStamp;
exports.appID                   = appID;
exports.log                     = log;
exports.currentTime             = currentTime;