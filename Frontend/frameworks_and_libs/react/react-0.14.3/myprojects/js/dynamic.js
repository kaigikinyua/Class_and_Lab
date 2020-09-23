var curr_slide="one";var count=1;var width=screen.width
const slides=["one","two","three","four"]
function autoScroll(){
    if(count>=slides.length){count=1}
    else{count+=1}
    //location.href="#"+slides[count]
    var elem=document.querySelector(".slides")
    elem.scrollLeft=(screen.width/2)*count;
    console.log("Hello world this is auto scroll")
}
setInterval(autoScroll,7000)