var curr_slide="one";var count=0;
const slides=["one","two","three","four"]
function autoScroll(){
    if(count>=slides.length-1){count=0}
    else{count+=1}
    location.href="#"+slides[count]
    console.log("Hello world this is auto scroll")
}
setInterval(autoScroll,7000)