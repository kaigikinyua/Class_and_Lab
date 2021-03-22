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
        readonly messages:object[],
        public read:boolean,
    ){}
    component(){
        var notif='read';var unreadNum=1
        if(this.read==true){
            notif='unread';
            messages.forEach(m=>{
                //logic to add count unread messages
            })
        }
        let c=`
            <div class='contact'>
                <div class='avatar'>${this.name[0]}</div>
                <div class='details'>
                    <div class='name'>${this.name}</div>
                    <div class='preview'>
                        <span class='msg'>${this.messages[0]}</span>
                        <span class='${notif}'>${unreadNum}</span>
                    </div>
                </div>
            </div>
        `
        return c
    }
}