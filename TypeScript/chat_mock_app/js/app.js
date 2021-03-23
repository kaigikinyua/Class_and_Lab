import { Filter } from './models/models.js';
import { ContactComponent } from './components/components.js';
import { Ajax } from './components/utils.js';
import { Chat, MessageAppBar } from './components/views.js';
var sendBtn = document.getElementById("send_message");
var messageInput = document.getElementById("messageInput");
var contactMessages = [];
messageInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        sendMessage(messageInput.value);
    }
});
sendBtn.addEventListener('click', function (e) {
    if (messageInput.value.length > 0) {
        sendMessage(messageInput.value);
    }
});
window.onload = function () {
    Ajax.fetchData("http://localhost:5500/messages.json", function (data) {
        ContactsView.loadContacts(data.contacts, data.messages);
    });
};
function sendMessage(newmessage) {
    if (newmessage.length < 1) {
        return;
    }
    var chatID = MessageAppBar.getcurrentChatID();
    contactMessages.forEach(function (cMsgs) {
        if (cMsgs.id == chatID) {
            cMsgs.messages.push({ read: true, message: newmessage, author: 'me', receiver: chatID, time: '12:05' });
            Chat.loadChatMessages(cMsgs.messages);
            return;
        }
    });
}
var ContactsView = /** @class */ (function () {
    function ContactsView() {
    }
    ContactsView.clearParent = function () { ContactsView.parent.innerHTML = ''; };
    ContactsView.loadContacts = function (contacts, msgs) {
        ContactsView.clearParent();
        console.log(msgs);
        var cM = [];
        contacts.forEach(function (c) {
            cM = Filter.filterUserMessages(c.id, msgs);
            contactMessages.push({ id: c.id, messages: cM });
            var cComponent = new ContactComponent(c.name, cM, c.id);
            var cTile = cComponent.component();
            cTile.addEventListener('click', function (e) {
                console.log("loading chat messages");
                MessageAppBar.loadNewChat(c.name, c.id);
                contactMessages.forEach(function (cMsgs) {
                    if (cMsgs.id == c.id) {
                        Chat.loadChatMessages(cMsgs.messages);
                        return;
                    }
                });
            });
            ContactsView.parent.appendChild(cTile);
        });
    };
    ContactsView.parent = document.getElementById("contact_list");
    return ContactsView;
}());
