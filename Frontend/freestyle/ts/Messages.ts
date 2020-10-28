module Messages{
    export function error_msg(message:string){
        console.error(message);
    }
    export function success(message:string){
        console.log(message);
    }
    export function warning(message:string){
        console.warn(message);
    }
}
//export default{Messages};