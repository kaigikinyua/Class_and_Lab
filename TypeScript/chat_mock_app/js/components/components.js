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
        var messageClass;
        if (senderType == 'receiver') {
            messageClass = 'receiver';
        }
        else {
            messageClass = 'sender';
        }
        var c = "\n            <div class='message'>\n                <span class='" + messageClass + "'>\n                    <span>" + this.message + "</span>\n                    <span class='time'>" + this.timeSent + "</span>\n                </span>\n            </div>\n        ";
        return c;
    };
    return MessageComponent;
}());
var ContactComponent = /** @class */ (function () {
    function ContactComponent(name, messages) {
        this.name = name;
        this.messages = messages;
    }
    ContactComponent.prototype.component = function () {
        var previewMessage = (this.messages.length > 0) ? "<span class='msg'>" + this.messages[0].message + "</span>" : "<span class='msg'></span>";
        var notif = 'read';
        var unreadNum = 1;
        var c = document.createElement('div');
        c.classList.add('contact');
        c.innerHTML = "\n            <div class='avatar'>" + this.name[0] + "</div>\n            <div class='details'>\n                <div class='name'>" + this.name + "</div>\n                <div class='preview'>\n                    " + previewMessage + "\n                    <span class='" + notif + "'>" + unreadNum + "</span>\n                </div>\n            </div>\n        ";
        return c;
    };
    return ContactComponent;
}());
export { ContactComponent, MessageComponent };
