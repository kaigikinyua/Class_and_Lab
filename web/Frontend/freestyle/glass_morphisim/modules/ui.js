export class UI{
    //show elements
    static showElements({id,className}){
        if(id!=undefined && id!=null)UI.showElemByID(id)
        else if(className!=undefined && className!=null)UI.showElemByClass(className)
    }
    static showElemByID(id){
        var elem=document.getElementById(id)
        elem.style.display="block"
        return true
    }
    static showElemByClass(className){
        var elem=document.querySelectorAll(`.${className}`)
        elem.forEach(e=>{
            e.style.display="block"
        })
        return true
    }
    static showElement(element){
        element.style.display="block"
    }
    static showElementSpecial({element,style}){
        element.style.display=`${style};`
    }
    //hide elements
    static hideElements({id,className}){
        if(id!=undefined && id!=null)UI.hideElemByID(id)
        else if(className!=undefined && className!=null)UI.hideElemByClass(className)
    }
    static hideElemByID(id){
        var elem=document.getElementById(id)
        elem.style.display="none"
        return true
    }
    static hideElemByClass(className){
        var elem=document.querySelectorAll(`.${className}`)
        elem.forEach(e=>{
            e.style.display="none"
        })
        return true
    }
    static hideElement(element){
        element.style.display="none"
    }
}