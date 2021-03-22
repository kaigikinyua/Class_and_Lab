var messages:string[]=[]
/*var msgObject:Object={
    receiver:string,
    sender:string,
    message:string,
    timeSent:string
}*/

class MessageClass{
    constructor(
        readonly timeSent:string,
        readonly userName:string,
        readonly message:string,
    ){}
    sendMessage(){}
    receiveMessage(){}
}