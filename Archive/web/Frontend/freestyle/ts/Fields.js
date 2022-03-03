"use strict";
exports.__esModule = true;
var Fields = /** @class */ (function () {
    function Fields(field) {
        this.email_reg = "[a-zA-Z0-9]*@[a-zA-Z0-9]*.[A-Za-z0-9]";
        this.field = field;
    }
    Fields.prototype.nonEmpty = function () {
        if (this.field == undefined || this.field == null || this.field == "") {
            return false;
        }
        return false;
    };
    Fields.prototype.email = function (text) {
        if (text.match(this.email_reg) != null) {
            return true;
        }
        return false;
    };
    Fields.prototype.serialNumber = function (text) {
        if (text.length > 0) {
            return true;
        }
        return false;
    };
    return Fields;
}());
exports["default"] = Fields;
