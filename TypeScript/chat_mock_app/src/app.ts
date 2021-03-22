import {Contact,Message,ContactMessages,Filter} from './models/models.js'
import {ContactComponent} from './components/components.js'
const sendBtn=document.getElementById("send_message") as HTMLButtonElement
const messageInput=document.getElementById("messageInput") as HTMLInputElement


let contactMessages:ContactMessages[]=[]

sendBtn.addEventListener('click',(e)=>{
    messageInput.value
})

window.onload=()=>{
    Ajax.fetchData("http://localhost:5500/messages.json",(data:{contacts:Contact[],messages:Message[]})=>{
        ContactsView.loadContacts(data.contacts,data.messages)
        console.log(contactMessages)
    })
}
class ContactsView{
    static parent=document.getElementById("contact_list") as HTMLDivElement
    static clearParent(){ContactsView.parent.innerHTML=''}
    static loadContacts(contacts:Contact[],msgs:Message[]){
        ContactsView.clearParent()
        var cM:Message[]=[]
        contacts.forEach(c=>{
            cM=Filter.filterUserMessages(c.id,msgs)
            contactMessages.push({id:c.id,messages:cM})
            var cComponent=new ContactComponent(c.name,cM)
            ContactsView.parent.appendChild(cComponent.component())
        })
    }
    static loadCurrentChat(userID:string){}
}

class Ajax{
    static fetchData(url:string,callback:Function){
        fetch(url)
        .then(res=>res.json())
        .then(data=>{callback(data)})
    }
}