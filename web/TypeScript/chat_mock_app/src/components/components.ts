import { Message } from '../models/models.js'
var userText={
    message:'',
    appendMessage(append:string){
        this.message+=append
        console.log(this.message)
    }
}

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

class EmojiPallete{
    constructor(readonly id:string){}
    render_emojis(){
            var emojis:Array<string>=['😜','😀','😁','😂','😃','😄','😅','😆','😇',
            '😈','😉','😊','😋','😌','😍','😎','😏','😐','😑','😒','😓','😔','😕',
            '😖','😗','😘','😙','😚','😛','😜','😝','😞','😟','😠','😡','😢','😣',
            '😤','😥','😦','😧','😨','😩','😪','😫','😬','😭','😮','😯','😰','😱',
            '😲','😳','😴','😵','😶','😷','🙁','🙂','🙃','🙄','🤐','🤑','🤒','🤓',
            '🤔','🤕','🤠','🤡','🤢','🤣','🤤','🤥','🤧','🤨','🤩','🤪','🤫','🤬',
            '🤭','🤮','🤯','🧐',
        ]
        var parent=document.getElementById(this.id) as HTMLDivElement
        emojis.forEach(e=>{
            var em=document.createElement('small')
            em.innerHTML=e
            em.addEventListener('click',(event)=>{
                console.log(e)
                userText.appendMessage(e)
            })
            parent.appendChild(em)
        })
    
}
}
export {ContactComponent,MessageComponent,EmojiPallete,userText}