var terminal=document.getElementById("text_term")
var text=[
    //create an object for command and result for the output to be more logical
    "sudo ln -s /usr/lib/x86_64-linux-gnu/libgstreamer-1.0.so.0 /usr/lib/libgstreamer-0.10.so.0",
    "Hello World",
    "sudo ln -s /lib/x86_64-linux-gnu/libssl.so.1.0.0 /usr/lib/libssl.so.10",
    "How about a drink",
    "ls",
    "sudo ln -s /lib/x86_64-linux-gnu/libcrypto.so.1.0.0 /usr/lib/libcrypto.so.10",
    "chmod +x ./scripts/clean.sh",
    "mv ./videos/test.mkv ./videos/lab",
    "sudo ln -s /usr/lib/x86_64-linux-gnu/libgstbase-1.0.so.0 /usr/lib/libgstbase-0.10.so.0",
    "clear",
    "sudo apt-get install libssl1.0.0 ocl-icd-opencl-dev fakeroot xorriso"
   
]
var lastText=0

function printText(numofLines){
    for(var j=0;j<numofLines;j++){
        clearTerminalLines(numofLines)
        var new_command=text[lastText]
        var last_command=document.createElement("p")
        last_command.classList.add("command")
        terminal.appendChild(last_command)
        last_command.innerHTML=new_command
        if(lastText<text.length){lastText+=1}
        if(lastText>=text.length){lastText=0}
    }
}
function clearTerminalLines(numofLines){
    var commands=document.querySelectorAll('p')
    if(commands.length>5){
        try{
            terminal.removeChild(commands[0])
        }catch(e){
            console.log(`failed to remove ${commands[0]} `)
            console.log(commands[0])
        }
    }
}
function typeCommand(command){
    var new_command=document.createElement("p")
    new_command.classList.add("command")
    new_command.classList.add("colored")
    new_command.innerHTML=`<i class='precur'>user<small>@</small>ironman</i>$ ${command}`
    terminal.appendChild(new_command)

}


function addCharacter({char,commandLine}){
    var prev_inner=commandLine.innerHTML
    prev_inner+=char
    commandLine.innerHTML=prev_inner
    console.log(`Adding character ${char}`)
}

function allowDrop(event){
    event.preventDefault()
   var nav=document.querySelectorAll("div.nav")
    nav[0].style.width="100%"
    event.innerHTML=nav[0]
}
function dropedElement(event){
    event.preventDefault()
    var elemID=event.dataTransfer.getData("element_id")
    event.target.appendChild(document.getElementById(elemID))
    var navs=document.querySelectorAll('nav.drop_nav')
    navs.forEach(element => {
        element.classList.remove("highlight")
    });
}
function dragStart(event){
    event.dataTransfer.setData("element_id",event.target.id)
    droppableArea()
}
function dragDrop(event){
    var nav=document.querySelectorAll("div.nav")
    nav[0].style.width="100%"
}

function droppableArea(){
    var navs=document.querySelectorAll('nav.drop_nav')
    navs.forEach(element => {
        element.classList.add("highlight")
    });
}
printText(3)
setInterval(()=>{
    printText(Math.floor((Math.random()*10+1)/2))
    typeCommand(text[lastText].toString())
},2000)