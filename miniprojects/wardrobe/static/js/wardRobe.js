class Wear{
    constructor({item:item,id:id,itemClass:itemClass}){
        this.item=item
        this.id=id
        this.itemClass=itemClass
    }
    changeItem(newItem){
        this.item=newItem
        this.template()
    }
    template(){
        var template=`
            <div class="${this.itemClass}">
                <img src="${this.item.images[0]}"/>
            </div>
        `
        var itemParent=document.getElementById(this.id)
        itemParent.innerHTML=template
        return template
    }
}

class WardRobeItem{
    constructor(item){
        this.item=item
    }
    template(){
        var change=()=>{

        }
        var template=`
            <div class='wardRobeItem' onClick="${}">
                <img class='wardRobeItemImage' src=${this.item.images[0]}/>
                <div class='details'>${this.item.price}</div>
            </div>
        `
    }
}