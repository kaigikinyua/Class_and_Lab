var curr_slide="one";
var count=1;
const width=screen.width
const slides=["one","two","three","four"]
var scrolledBy=0
var max=0.95*((slides.length)*(width/2))
function autoScroll(){
    if(scrolledBy>max){scrolledBy=0;count=1}
    else{
        scrolledBy=(width/2)*count
        count+=1
    }
    //location.href="#"+slides[count]
    var elem=document.querySelector(".slides")
    elem.scrollLeft=scrolledBy;
    console.log("Hello world this is auto scroll")
}
setInterval(autoScroll,10000)

function slideLeftBy(numberOfPix){}
function resetScroll(){}