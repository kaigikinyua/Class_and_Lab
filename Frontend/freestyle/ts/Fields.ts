class Fields{
    field;
    email_reg:string="[a-zA-Z0-9]*@[a-zA-Z0-9]*.[A-Za-z0-9]"
    constructor(field){this.field=field}
    nonEmpty(){
        if(this.field==undefined || this.field==null || this.field==""){return false}
        return false;
    }
    email(text:string){
        if(text.match(this.email_reg)!=null){
            return true
        }return false;
    }
    serialNumber(text:string){
        if(text.length>0){return true}return false;
    }
}

export default Fields;