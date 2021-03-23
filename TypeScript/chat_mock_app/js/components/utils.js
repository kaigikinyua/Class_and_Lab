var NotificationPopUp = /** @class */ (function () {
    function NotificationPopUp() {
    }
    NotificationPopUp.error = function (message) {
        NotificationPopUp.notificationComponent(message, 'error');
    };
    NotificationPopUp.warning = function (message) {
        NotificationPopUp.notificationComponent(message, 'warning');
    };
    NotificationPopUp.success = function (message) {
        NotificationPopUp.notificationComponent(message, 'success');
    };
    NotificationPopUp.notificationComponent = function (message, notifClass) {
        var notifContainer = document.createElement('div');
        notifContainer.classList.add("notification");
        notifContainer.classList.add(notifClass);
        notifContainer.innerHTML = "<p>" + message + "</p>";
        document.appendChild(notifContainer);
        setTimeout(function () { document.removeChild(notifContainer); }, 10000);
    };
    return NotificationPopUp;
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
export { Ajax, NotificationPopUp };
