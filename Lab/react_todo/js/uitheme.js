//const { func } = require("prop-types")

var switchToTheme="dark"
const themeBtn=document.getElementById('theme')
themeBtn.addEventListener('click',(e)=>{
    changeTheme()
    console.log("Changing theme")
})
function changeTheme(){
    var newTheme=null
    switch (switchToTheme){
        case 'light':
            var containers=document.querySelectorAll('.cLight')
            var focusContainers=document.querySelectorAll('.cFocusLight')
            var buttons=document.querySelectorAll('.btnLight')
            swapThemeClass({elements:containers,currClass:"cLight",incomingClass:"cDark"})
            swapThemeClass({elements:focusContainers,currClass:"cFocusLight",incomingClass:"cFocusDark"})
            swapThemeClass({elements:buttons,currClass:"btnLight",incomingClass:"btnDark"})
            newTheme='dark'    
        case 'dark':
            var containers=document.querySelectorAll('.cLight')
            var focusContainers=document.querySelectorAll('.cFocusDark')
            var buttons=document.querySelectorAll('.btnDark')
            swapThemeClass({elements:containers,currClass:"cDark",incomingClass:"cLight"})
            swapThemeClass({elements:focusContainers,currClass:"cFocusDark",incomingClass:"cFocusLight"})
            swapThemeClass({elements:buttons,currClass:"btnDark",incomingClass:"btnLight"})
            newTheme='light' 
    }
    switchToTheme=newTheme
}

function swapThemeClass({elements,currClass,incomingClass}){
    elements.forEach(e=>{
        e.classList.remove(currClass)
        e.classList.add(incomingClass)
        console.log(e)
    })
}