import { Messages } from './Messages';
export class Database{
    key:string;value:string|number;
    constructor(key:string,value:string|number){
        console.log("Hello world")
        //this.key=key
        //this.value=value
        Messages.error_msg("Hello World");
    }
    localStorageSupport=()=>{
        if(window.localStorage)return true;
        return false;
    } 
    saveItem(){
        if(this.localStorageSupport()!=true){return false}
        try{
            localStorage.setItem(this.key,this.value.toString());        
        }catch(e){
            return false;
        }
    }
    fetchItem(){
        if(this.localStorageSupport()!=true){return false};
        try{
            var data=localStorage.getItem(this.key)
            return data;
        }catch(e){
            Messages.error_msg(e);   
            return false;
        }
    }   
}
//export default { Database } 