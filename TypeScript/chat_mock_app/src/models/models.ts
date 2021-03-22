interface Contact{
    name:string,
    id:string
}
interface Message{
    read:boolean,
    message:string,
    author:string,
    receiver:string,
    time:string
}
interface ContactMessages{
    id:string,
    messages:Message[]
}

class MessageClass{
    constructor(
        readonly timeSent:string,
        readonly userName:string,
        readonly message:string,
        readonly userID:string,
        public read:boolean
    ){}
    sendMessage(){}
    receiveMessage(){}
}
class Filter{
    static filterUserMessages(id:string,messages:Message[]){
        var filteredMessages:Message[]=[]
        messages.forEach(m=>{
            if(m.author==id || m.receiver==id){
                filteredMessages.push(m)
            }
        })
        return filteredMessages
    }
}

export {Contact,Message,MessageClass,ContactMessages,Filter}

