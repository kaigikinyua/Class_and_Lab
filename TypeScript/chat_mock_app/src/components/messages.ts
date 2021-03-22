class MessageAppBar{}

class MessageComponent{
    constructor(
        readonly timeSent:string,
        readonly message:string,
    ){}
    component(senderType:string){
        var msgType:string;
        if(senderType=='receiver'){}
        let c=`
            <div class='message'>
                <span class=''></span>
            </div>
        `
    }
    renderMessage(){}
}