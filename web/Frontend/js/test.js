//var HtmlElements = /** @class */ (function () {
/*    function HtmlElements() {
    }
    HtmlElements.createP = function (content) {
        var par = document.createElement('p');
        par.innerHTML = content;
        return par;
    };
    HtmlElements.createDiv = function () { };
    return HtmlElements;
}());
*/

const HtmlElements=(function(){
    function HtmlElements(){}
    HtmlElements.createP=function (content){
        var p=document.createElement('p')
        p.innerHTML=content;
        return p
    }
    //returns the name of the object to be referenced in other scripts
    return HtmlElements

}());