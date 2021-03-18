var HtmlElements = /** @class */ (function () {
    function HtmlElements() {
    }
    HtmlElements.createP = function (content) {
        var par = document.createElement('p');
        par.innerHTML = content;
        return par;
    };
    HtmlElements.createDiv = function () { };
    return HtmlElements;
}());
