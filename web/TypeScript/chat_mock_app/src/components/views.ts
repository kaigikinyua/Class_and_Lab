import {MessageComponent} from './components.js'
import {Message} from '../models/models.js'
class MessageAppBar{
    static appbar=document.getElementById("message_box_appbar") as HTMLDivElement
    static clearMessageAppBar(){
        MessageAppBar.appbar.children[0].innerHTML=''
        MessageAppBar.appbar.setAttribute('data-userid','')
    }
    static getcurrentChatID():string{ return MessageAppBar.appbar.getAttribute('data-userid')!}
    static loadNewChat(username:string,userID:string){
        MessageAppBar.appbar.children[0].innerHTML=username
        MessageAppBar.appbar.setAttribute('data-userid',userID)
    }
}
class Chat{
    static chat_messages=document.getElementById('chat_messages') as HTMLDivElement
    static clearChatMessages(){Chat.chat_messages.innerHTML=''}
    static loadChatMessages(messages:Message[]){
        Chat.clearChatMessages()
        messages.forEach(m=>{
            var mc=new MessageComponent(m.time,m.message)
            var mcc=mc.component(m.author)
            Chat.chat_messages.appendChild(mcc)
        })
    }
}

export{Chat,MessageAppBar}