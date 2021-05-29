"use strict";
var MessageAppBar = /** @class */ (function () {
    function MessageAppBar() {
    }
    return MessageAppBar;
}());
var MessageComponent = /** @class */ (function () {
    function MessageComponent(timeSent, message) {
        this.timeSent = timeSent;
        this.message = message;
    }
    MessageComponent.prototype.component = function (senderType) {
        var msgType;
        if (senderType == 'receiver') { }
        var c = "\n            <div class='message'>\n                <span class=''></span>\n            </div>\n        ";
    };
    MessageComponent.prototype.renderMessage = function () { };
    return MessageComponent;
}());
