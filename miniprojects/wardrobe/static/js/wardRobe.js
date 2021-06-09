var Items=null
async function init(){
    Items=await Utils.Ajax.getRequest(Utils.Settings.baseUrl+'/items.json')    
    WornItems.head.init()
    WornItems.torso.init()
    WornItems.legs.init()
    WornItems.feet.init()
}

var WornItems={
    head:{
        instance:()=>{
            var item=new Wear({item:Items[0],id:'head',itemClass:'head'})
            return item
        },
        init:()=>{
            var item=new Wear({item:Items[0],id:'head',itemClass:'head'})
            item.template()
        }
    },
    torso:{
        instance:()=>{
            var item=new Wear({item:Items[1],id:'torso',itemClass:'torso'})
            return item
        },
        init:()=>{
            var item=new Wear({item:Items[1],id:'torso',itemClass:'torso'})
            item.template()
        }
    },
    legs:{
        instance:()=>{
            var item=new Wear({item:Items[2],id:'legs',itemClass:'legs'})
            return item
        },
        init:()=>{
            var item=new Wear({item:Items[2],id:'legs',itemClass:'torso'})
            item.template()
        }
    },
    feet:{
        instance:()=>{
            var item=new Wear({item:Items[3],id:'feet',itemClass:'feet'})
            return item
        },
        init:()=>{
            var item=new Wear({item:Items[3],id:'feet',itemClass:'feet'})
            item.template()
        }
    },

}

class Wear{
    constructor({item:item,id:id,itemClass:itemClass}){
        this.item=item
        this.id=id
        this.itemClass=itemClass
        console.log(item)
    }
    changeItem(newItem){
        this.item=newItem
        this.template()
    }
    template(){
        var template=`
            <div class="${this.itemClass}">
                <img src="${Utils.Settings.imageUrl(this.item.images[0])}"/>
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
            switch(this.item.bodyPart){
                case('head'):
                    WornItems.head.instance.changeItem(this.item)
                case('torso'):
                    WornItems.torso.instance.changeItem(this.item)
                case('legs'):
                    WornItems.legs.instance.changeItem(this.item)
                case('feet'):
                    WornItems.feet.instance.changeItem(this.item)
            }
        }
        var template=`
            <div class='wardRobeItem' onClick="${change}">
                <img class='wardRobeItemImage' src=${Utils.Settings.imageUrl(this.item.images[0])}/>
                <div class='details'>${this.item.price}</div>
            </div>
        `
        return template
    }
}

init()