"use strict";
exports.__esModule = true;
exports.Messages = void 0;
var Messages = /** @class */ (function () {
    function Messages() {
    }
    Messages.error_msg = function (message) {
        console.error(message);
    };
    Messages.success = function (message) {
        console.log(message);
    };
    Messages.warning = function (message) {
        console.warn(message);
    };
    return Messages;
}());
exports.Messages = Messages;
//export default{Messages};
