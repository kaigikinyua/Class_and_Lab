"use strict";
exports.__esModule = true;
exports.Database = void 0;
var Messages_1 = require("./Messages");
var Database = /** @class */ (function () {
    function Database(key, value) {
        this.localStorageSupport = function () {
            if (window.localStorage)
                return true;
            return false;
        };
        console.log("Hello world");
        //this.key=key
        //this.value=value
        Messages_1.Messages.error_msg("Hello World");
    }
    Database.prototype.saveItem = function () {
        if (this.localStorageSupport() != true) {
            return false;
        }
        try {
            localStorage.setItem(this.key, this.value.toString());
        }
        catch (e) {
            return false;
        }
    };
    Database.prototype.fetchItem = function () {
        if (this.localStorageSupport() != true) {
            return false;
        }
        ;
        try {
            var data = localStorage.getItem(this.key);
            return data;
        }
        catch (e) {
            Messages_1.Messages.error_msg(e);
            return false;
        }
    };
    return Database;
}());
exports.Database = Database;
//export default { Database } 
