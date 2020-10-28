var Messages;
(function (Messages) {
    function error_msg(message) {
        console.error(message);
    }
    Messages.error_msg = error_msg;
    function success(message) {
        console.log(message);
    }
    Messages.success = success;
    function warning(message) {
        console.warn(message);
    }
    Messages.warning = warning;
})(Messages || (Messages = {}));
//export default{Messages};
