import {Messages} from './Messages';
export class Database{
    key:string;value:string|number;
    constructor(key:string,value:string|number){
        console.log("Hello world")
        //this.key=key
        //this.value=value
        Messages.success("Hello World");
    }
    static localStorageSupport=()=>{
        if(window.localStorage)return true;
        return false;
    } 
    saveItem(){
        if(Database.localStorageSupport()!=true){return false}
        try{
            localStorage.setItem(this.key,this.value.toString());        
        }catch(e){
            return false;
        }
    }
    fetchItem(){
        if(Database.localStorageSupport()!=true){return false};
        try{
            var data=localStorage.getItem(this.key)
            return data;
        }catch(e){
            Messages.error_msg(e);   
            return false;
        }
    }   
}