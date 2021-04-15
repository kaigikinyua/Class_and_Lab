var userText = {
    message: '',
    appendMessage: function (append) {
        this.message += append;
        console.log(this.message);
    }
};
var MessageComponent = /** @class */ (function () {
    function MessageComponent(timeSent, message) {
        this.timeSent = timeSent;
        this.message = message;
    }
    MessageComponent.prototype.component = function (senderType) {
        var messageClass;
        if (senderType == 'me') {
            messageClass = 'receiver';
        }
        else {
            messageClass = 'sender';
        }
        var mc = document.createElement('div');
        mc.classList.add('message');
        mc.innerHTML = "\n            <span class='" + messageClass + "'>\n                <span>" + this.message + "</span>\n                <span class='time'>" + this.timeSent + "</span>\n            </span>\n        ";
        return mc;
    };
    return MessageComponent;
}());
var ContactComponent = /** @class */ (function () {
    function ContactComponent(name, messages, id) {
        this.name = name;
        this.messages = messages;
        this.id = id;
    }
    ContactComponent.prototype.component = function () {
        var previewMessage = (this.messages.length > 0) ? "<span class='msg'>" + this.messages[0].message + "</span>" : "<span class='msg'></span>";
        var notif = 'read';
        var unreadNum = 1;
        var c = document.createElement('div');
        c.classList.add('contact');
        c.setAttribute('data-id', this.id);
        c.innerHTML = "\n            <div class='avatar'>" + this.name[0] + "</div>\n            <div class='details'>\n                <div class='name'>" + this.name + "</div>\n                <div class='preview'>\n                    " + previewMessage + "\n                    <span class='" + notif + "'>" + unreadNum + "</span>\n                </div>\n            </div>\n        ";
        return c;
    };
    return ContactComponent;
}());
var EmojiPallete = /** @class */ (function () {
    function EmojiPallete(id) {
        this.id = id;
    }
    EmojiPallete.prototype.render_emojis = function () {
        var emojis = ['😜', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇',
            '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕',
            '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣',
            '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱',
            '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂', '🙃', '🙄', '🤐', '🤑', '🤒', '🤓',
            '🤔', '🤕', '🤠', '🤡', '🤢', '🤣', '🤤', '🤥', '🤧', '🤨', '🤩', '🤪', '🤫', '🤬',
            '🤭', '🤮', '🤯', '🧐',
        ];
        var parent = document.getElementById(this.id);
        emojis.forEach(function (e) {
            var em = document.createElement('small');
            em.innerHTML = e;
            em.addEventListener('click', function (event) {
                console.log(e);
                userText.appendMessage(e);
            });
            parent.appendChild(em);
        });
    };
    return EmojiPallete;
}());
export { ContactComponent, MessageComponent, EmojiPallete, userText };
