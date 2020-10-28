class Database{
    key:string;value:string|number;
    constructor(key:string,value:string|number){
        this.key=key
        this.value=value
    }
    saveItem(){
        if(Database.localStorageSupport()!=true)return false
        try{
            localStorage.setItem(this.key,this.value.toString());        
        }catch(e){
            return false;
        }
    }

    static localStorageSupport(){
        if(window.localStorage)return true;
        return false;
    }    
}
export default {Storage};