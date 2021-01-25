var currYoffset=0
var prevYoffset=0

var elements=document.querySelectorAll("section.animated")
window.onscroll=async ()=>{
    currYoffset=window.pageYOffset
    p_yoffset=await get_prevYoffset()
    if(p_yoffset<currYoffset){
        strip_elements(elements,"slide_out")
        scrolling_down(elements)
    }else if(p_yoffset>currYoffset){
        strip_elements(elements,"slide_in")
        scrolling_up(elements)
    }
}


function scrolling_down(animated){
    //var animated=document.querySelectorAll("section.animated")
    animated.forEach(e=>{
        if(e.offsetTop-window.pageYOffset<window.innerHeight*0.9){
            e.classList.remove("slide_out")
            e.classList.add("slide_in")
            //setTimeout(remove_class(e,'slide_in'),1500)
        }
    })
}

function scrolling_up(animated){
    //var animated=document.querySelectorAll("section.animated")
    animated.forEach(e=>{
        if(e.offsetTop-window.pageYOffset>window.innerHeight*0.6){
            e.classList.remove("slide_in")
            e.classList.add("slide_out")
            //setTimeout(remove_class(e,'slide_in'),1500)
        }
    })
}


async function get_prevYoffset(){
    setTimeout(()=>{prevYoffset=currYoffset},100)
    return prevYoffset
}

function strip_elements(elements,className){
    elements.forEach(e=>{
        e.classList.remove(className)
    })
}