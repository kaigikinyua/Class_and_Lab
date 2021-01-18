import {UI} from "./modules/ui.js"
import {Notification} from './modules/notifications.js'
const sidenav=document.getElementById("sidenav")
const cover=document.getElementById("cover")
const menu=document.getElementById("menu")

window.onload=()=>{
    hideSideNav()
}

cover.addEventListener('click',(e)=>{
    hideSideNav()
});
menu.addEventListener('click',(e)=>{
    UI.showElement(sidenav)
    UI.showElement(cover)
    UI.hideElement(menu)
})

function hideSideNav(){
    UI.hideElement(sidenav)
    UI.hideElement(cover)
    UI.showElement(menu)
}
Notification.success("Build, Test, Analyze ,Revise, Deploy!!!, Monitor")