import { MessageComponent } from './components.js';
var MessageAppBar = /** @class */ (function () {
    function MessageAppBar() {
    }
    MessageAppBar.clearMessageAppBar = function () {
        MessageAppBar.appbar.children[0].innerHTML = '';
        MessageAppBar.appbar.setAttribute('data-userid', '');
    };
    MessageAppBar.getcurrentChatID = function () { return MessageAppBar.appbar.getAttribute('data-userid'); };
    MessageAppBar.loadNewChat = function (username, userID) {
        MessageAppBar.appbar.children[0].innerHTML = username;
        MessageAppBar.appbar.setAttribute('data-userid', userID);
    };
    MessageAppBar.appbar = document.getElementById("message_box_appbar");
    return MessageAppBar;
}());
var Chat = /** @class */ (function () {
    function Chat() {
    }
    Chat.clearChatMessages = function () { Chat.chat_messages.innerHTML = ''; };
    Chat.loadChatMessages = function (messages) {
        Chat.clearChatMessages();
        messages.forEach(function (m) {
            var mc = new MessageComponent(m.time, m.message);
            var mcc = mc.component(m.author);
            Chat.chat_messages.appendChild(mcc);
        });
    };
    Chat.chat_messages = document.getElementById('chat_messages');
    return Chat;
}());
export { Chat, MessageAppBar };
