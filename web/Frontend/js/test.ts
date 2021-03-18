class HtmlElements{
    static createP(content:string){
        var par=document.createElement('p')
        par.innerHTML=content
        return par
    }
    static createDiv(){}
}