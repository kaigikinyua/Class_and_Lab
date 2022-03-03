var Canvas = /** @class */ (function () {
    function Canvas(h, w) {
        this.height = h;
        this.width = w;
    }
    return Canvas;
}());
var Ajax = /** @class */ (function () {
    function Ajax() {
    }
    Ajax.get = function (url, callback) {
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (data) { return callback(data); })["catch"](function (e) {
            console.log(e);
        });
    };
    Ajax.post = function (url, data, callback) {
        fetch(url, { "method": "POST",
            "body": data
        }).then(function (res) { return res.json(); })
            .then(function (data) { return callback(data); })["catch"](function (e) { console.log(e); });
    };
    return Ajax;
}());
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.dom_dimensions = function () {
        var w_h = window.innerHeight;
        var w_w = window.innerWidth;
        return { "h": w_h, "w": w_w };
    };
    return Dom;
}());
console.log(Dom.dom_dimensions());
console.log(Ajax.get("http://localhost:5500", function (data) { console.log(data); }));
