export class Messages{
    error_msg(message:string){
        console.error(message);
    }
    success(message:string){
        console.log(message);
    }
    warning(message:string){
        console.warn(message);
    }
}
//export default{Messages};