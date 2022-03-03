export class Messages{
    static error_msg(message:string){
        console.error(message);
    }
    static success(message:string){
        console.log(message);
    }
    static warning(message:string){
        console.warn(message);
    }
}
//export default{Messages};