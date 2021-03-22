var MessageClass = /** @class */ (function () {
    function MessageClass(timeSent, userName, message, userID, read) {
        this.timeSent = timeSent;
        this.userName = userName;
        this.message = message;
        this.userID = userID;
        this.read = read;
    }
    MessageClass.prototype.sendMessage = function () { };
    MessageClass.prototype.receiveMessage = function () { };
    return MessageClass;
}());
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.filterUserMessages = function (id, messages) {
        var filteredMessages = [];
        messages.forEach(function (m) {
            if (m.author == id || m.receiver == id) {
                filteredMessages.push(m);
            }
        });
        return filteredMessages;
    };
    return Filter;
}());
export { MessageClass, Filter };
