var messages:string[]=[]
var contacts:object[]=[
    {name:"James",message:{}},
    {name:"April",message:{}},
    {name:"John",message:{}},
    {name:"Nick",message:{}},
    {name:"Jane",message:{}},
    {name:"Alison",message:{}},
    {name:"Jake",message:{}},
]

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
        readonly userID:string,
        public read:boolean
    ){}
    sendMessage(){}
    receiveMessage(){}
}

