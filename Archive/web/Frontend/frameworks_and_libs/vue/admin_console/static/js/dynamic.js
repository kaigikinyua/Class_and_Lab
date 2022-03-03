window.onload= async ()=>{
    //setInterval(increment,1000);
    tabsActionListener()
    for(var i=0;i<100;i++){
        increment();
        await sleep(90);
    }  
}
function increment(){
    var dom_inc=document.querySelectorAll('.increment');
    dom_inc.forEach(element => {
        var val=parseInt(element.innerHTML)
        val+=parseInt(element.dataset.inc)
        element.innerHTML=val
    });
}
function sleep(time){
    return new Promise(resolve=>setTimeout(resolve,time));
}


function tabsActionListener(){
    console.log("Tab actions")
    var buttons=document.querySelectorAll('button.tab-button')
    buttons.forEach(button=>{
        button.addEventListener('click',e=>{
            changeTab(e);
            console.warn("Hello WOrld")
        })
    })
}
function changeTab(e){
    console.log(e.target.dataset.tab)
    /*var tab=e.target.dataset.tab
    var tabActivate=document.getElementById(tab);
    tabActivate.classList.toggle('active')
    activateTabButton(e)*/
}
function activateTabButton(e){
    
}