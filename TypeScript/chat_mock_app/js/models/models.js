"use strict";
var messages = [];
/*var msgObject:Object={
    receiver:string,
    sender:string,
    message:string,
    timeSent:string
}*/
var MessageClass = /** @class */ (function () {
    function MessageClass(timeSent, userName, message) {
        this.timeSent = timeSent;
        this.userName = userName;
        this.message = message;
    }
    MessageClass.prototype.sendMessage = function () { };
    MessageClass.prototype.receiveMessage = function () { };
    return MessageClass;
}());
