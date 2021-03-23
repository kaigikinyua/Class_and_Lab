import {Contact,Message,ContactMessages,Filter} from './models/models.js'
import {ContactComponent} from './components/components.js'
import { NotificationPopUp,Ajax } from './components/utils.js'
import {Chat,MessageAppBar} from './components/views.js'

const sendBtn=document.getElementById("send_message") as HTMLButtonElement
const messageInput=document.getElementById("messageInput") as HTMLInputElement


let contactMessages:ContactMessages[]=[]

messageInput.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
        sendMessage(messageInput.value)
    }
})
sendBtn.addEventListener('click',(e)=>{
    if(messageInput.value.length>0){
        sendMessage(messageInput.value)
    }
})

window.onload=()=>{
    Ajax.fetchData("http://localhost:5500/messages.json",(data:{contacts:Contact[],messages:Message[]})=>{
        ContactsView.loadContacts(data.contacts,data.messages)
    })
}

function sendMessage(newmessage:string){
    if(newmessage.length<1){return}
    var chatID:string=MessageAppBar.getcurrentChatID()
    contactMessages.forEach(cMsgs=>{
        if(cMsgs.id==chatID){
            cMsgs.messages.push({read:true,message:newmessage,author:'me',receiver:chatID,time:'12:05'})
            Chat.loadChatMessages(cMsgs.messages)
            return 
        }
    })
}

class ContactsView{
    static parent=document.getElementById("contact_list") as HTMLDivElement
    static clearParent(){ContactsView.parent.innerHTML=''}
    static loadContacts(contacts:Contact[],msgs:Message[]){
        ContactsView.clearParent()
        console.log(msgs)
        var cM:Message[]=[]
        contacts.forEach(c=>{
            cM=Filter.filterUserMessages(c.id,msgs)
            contactMessages.push({id:c.id,messages:cM})
            var cComponent=new ContactComponent(c.name,cM,c.id)
            var cTile=cComponent.component()
            cTile.addEventListener('click',(e)=>{
                console.log("loading chat messages")
                MessageAppBar.loadNewChat(c.name,c.id)
                contactMessages.forEach(cMsgs=>{
                    if(cMsgs.id==c.id){
                        Chat.loadChatMessages(cMsgs.messages)
                        return 
                    }
                })
            })
            ContactsView.parent.appendChild(cTile)
        })
    }
}
