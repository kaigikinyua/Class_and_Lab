import {UI} from './ui.js'
export class Notification{
    static error(message){
        var notif=set_up_notif('error')
        notif.innerHTML=message
        UI.showElement(notif)
    }
    static success(message){
        var notif=set_up_notif('success')
        notif.innerHTML=message
        UI.showElement(notif)
    }
    static warning(message){
        var notif=set_up_notif('warning')
        notif.innerHTML=message
        UI.showElement(notif)
    }
}

function set_up_notif(message_type){
    var notif=document.getElementById("notification")
    notif.classList.add(message_type)
    notif.addEventListener('click',(e)=>{
        notif.classList.remove(message_type)
        UI.hideElement(notif)
    })
    return notif
}