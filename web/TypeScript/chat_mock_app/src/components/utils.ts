class NotificationPopUp{
    static error(message:string){
        NotificationPopUp.notificationComponent(message,'error')
    }
    static warning(message:string){
        NotificationPopUp.notificationComponent(message,'warning')
    }
    static success(message:string){
        NotificationPopUp.notificationComponent(message,'success')
    }
    static notificationComponent(message:string,notifClass:string){
        var notifContainer=document.createElement('div')
        notifContainer.classList.add("notification")
        notifContainer.classList.add(notifClass)
        notifContainer.innerHTML=`<p>${message}</p>`
        document.appendChild(notifContainer)
        setTimeout(()=>{document.removeChild(notifContainer)},10000)
    }
}

class Ajax{
    static fetchData(url:string,callback:Function){
        fetch(url)
        .then(res=>res.json())
        .then(data=>{callback(data)})
    }
}

export { Ajax,NotificationPopUp}