//interfaces
interface OutPutFormatter{
    format():string;
}

class Payment implements OutPutFormatter{
    constructor(){}
    format(){ return 'Hello World'}
}

class Invoice implements OutPutFormatter{
    constructor(){}
    format(){ return 'Hello World'}
}