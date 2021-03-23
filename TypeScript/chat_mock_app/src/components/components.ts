import { Message } from '../models/models.js'
class MessageComponent{
    constructor(
        readonly timeSent:string,
        readonly message:string,
    ){}
    component(senderType:string){
        var messageClass:string;
        if(senderType=='me'){messageClass='receiver'}
        else{messageClass='sender'}
        let mc=document.createElement('div')
        mc.classList.add('message')
        mc.innerHTML=`
            <span class='${messageClass}'>
                <span>${this.message}</span>
                <span class='time'>${this.timeSent}</span>
            </span>
        `
        return mc
    }
}

class ContactComponent{
    constructor(
        readonly name:string,
        readonly messages:Message[],
        readonly id:string,
    ){}
    component(){
        var previewMessage:string=(this.messages.length>0)?`<span class='msg'>${this.messages[0].message}</span>`:"<span class='msg'></span>"
        var notif='read';var unreadNum=1
        let c=document.createElement('div')
        c.classList.add('contact')
        c.setAttribute('data-id',this.id)
        c.innerHTML=`
            <div class='avatar'>${this.name[0]}</div>
            <div class='details'>
                <div class='name'>${this.name}</div>
                <div class='preview'>
                    ${previewMessage}
                    <span class='${notif}'>${unreadNum}</span>
                </div>
            </div>
        `
        return c
    }
}
export {ContactComponent,MessageComponent}