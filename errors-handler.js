/**
 * Errors management module.
 * 
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */


var toErrorMessage = function(errorCode, errorMessage){    
    return "errorCode:"+errorCode+", errorDescription:"+errorMessage+"\n";
};

// error codes in HTTP response ('errorCode')
var errorMsgFromCode = function(code){
    switch(code){
        // UTILS
        case 0:
            return "OK!";
            break;
            
        default:
            return "Unexpected error occured: code "+code;
            break;
    }
};

exports.errorMsgFromCode = errorMsgFromCode;
exports.toErrorMessage = toErrorMessage;