import { Message } from '../models/models.js'
class MessageAppBar{}

class MessageComponent{
    constructor(
        readonly timeSent:string,
        readonly message:string,
    ){}
    component(senderType:string){
        var messageClass:string;
        if(senderType=='receiver'){messageClass='receiver'}
        else{messageClass='sender'}
        let c=`
            <div class='message'>
                <span class='${messageClass}'>
                    <span>${this.message}</span>
                    <span class='time'>${this.timeSent}</span>
                </span>
            </div>
        `
        return c
    }
}

class ContactComponent{
    constructor(
        readonly name:string,
        readonly messages:Message[],
    ){}
    component(){
        var previewMessage:string=(this.messages.length>0)?`<span class='msg'>${this.messages[0].message}</span>`:"<span class='msg'></span>"
        var notif='read';var unreadNum=1
        let c=document.createElement('div')
        c.classList.add('contact')
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