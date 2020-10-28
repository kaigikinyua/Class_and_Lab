"use strict";
exports.__esModule = true;
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database(key, value) {
        console.log("Hello world");
        //this.key=key
        //this.value=value
        //Messages.success("Hello World");
    }
    Database.prototype.saveItem = function () {
        if (Database.localStorageSupport() != true) {
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
        if (Database.localStorageSupport() != true) {
            return false;
        }
        ;
        try {
            var data = localStorage.getItem(this.key);
            return data;
        }
        catch (e) {
            Messages.error_msg(e);
            return false;
        }
    };
    Database.localStorageSupport = function () {
        if (window.localStorage)
            return true;
        return false;
    };
    return Database;
}());
exports.Database = Database;
