import { Filter } from './models/models.js';
import { ContactComponent } from './components/components.js';
var sendBtn = document.getElementById("send_message");
var messageInput = document.getElementById("messageInput");
var contactMessages = [];
sendBtn.addEventListener('click', function (e) {
    messageInput.value;
});
window.onload = function () {
    Ajax.fetchData("http://localhost:5500/messages.json", function (data) {
        ContactsView.loadContacts(data.contacts, data.messages);
        console.log(contactMessages);
    });
};
var ContactsView = /** @class */ (function () {
    function ContactsView() {
    }
    ContactsView.clearParent = function () { ContactsView.parent.innerHTML = ''; };
    ContactsView.loadContacts = function (contacts, msgs) {
        ContactsView.clearParent();
        var cM = [];
        contacts.forEach(function (c) {
            cM = Filter.filterUserMessages(c.id, msgs);
            contactMessages.push({ id: c.id, messages: cM });
            var cComponent = new ContactComponent(c.name, cM);
            ContactsView.parent.appendChild(cComponent.component());
        });
    };
    ContactsView.loadCurrentChat = function (userID) { };
    ContactsView.parent = document.getElementById("contact_list");
    return ContactsView;
}());
var Ajax = /** @class */ (function () {
    function Ajax() {
    }
    Ajax.fetchData = function (url, callback) {
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (data) { callback(data); });
    };
    return Ajax;
}());
