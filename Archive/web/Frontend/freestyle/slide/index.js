var transcription=[
    {start:100,end:200,text:"Hello World"},
    {start:201,end:300,text:"Hello World"},
    {start:301,end:400,text:"Hello World"},
    {start:401,end:500,text:"Hello World"},
]
var mousedown=false
function renderAdjustable(){
    var container=document.getElementById('container')
    transcription.forEach(ts=>{
        var adjstble=document.createElement('div')
        adjstble.classList.add('adjustable')
        adjstble.innerHTML=ts.text
        adjstble.style.width=(ts.end-ts.start)/1.2
        adjstble.addEventListener('mousedown',(e)=>{mousedown=true})
        adjstble.addEventListener('mousemove',adjust)
        container.appendChild(adjstble)
    })
}
document.addEventListener('mouseup',(e)=>{mousedown=false})
renderAdjustable()
function adjust(e){
    if(mousedown==true){
        console.log(e.offsetX)
        console.log(mousedown)
        var width=e.target.style.width
        e.target.style.width=parseInt(width)-e.offsetX
        //console.log(e.target.style.width-e.offsetX)
    }
}


//option 2
function renderAdjustable2(){
    var container=document.getElementById('container2')
    transcription.forEach(function(ts,i){
        var adjstble=document.createElement('div')
        adjstble.classList.add('adjustable')
        adjstble.innerHTML=ts.text
        adjstble.style.height=(ts.end-ts.start)/1.2
        adjstble.style.draggable=true
        adjstble.dataset['index']=i
        //adjstble.style.resize='horizontal'
        new ResizeObserver(resizeAdjustable).observe(adjstble)
        container.appendChild(adjstble)
    })
}
renderAdjustable2()
function resizeAdjustable(element){
    var index=element[0].target.dataset.index
    transcription[index].end=parseInt(element[0].target.style.height)*2
    console.log(element[0].target.style.height)
}

//option3

function renderAdjustable3(){
    var container=document.getElementById('container3')
    var mousedown=false
    container.addEventListener('mousedown',(e)=>{
        mousedown=true        
    })
    container.addEventListener('mousemove',(e)=>{
        if(mousedown==true){
            
        }
    })
    container.addEventListener('mouseup',(e)=>{
        mousedown=false
    })
    transcription.forEach(function(ts,i){
        var adjstble=document.createElement('div')
        adjstble.classList.add('adjustable')
        adjstble.draggable=true
        adjstble.ondrag=(e)=>{
            e.preventDefault()
            //console.log(e.target.clientX)
        }
        adjstble.ondragstart=(e)=>{
            return false
        }
        adjstble.id=`adjustable${i}`
        adjstble.innerHTML=ts.text
        adjstble.style.height=(ts.end-ts.start)/1.2
        adjstble.style.dragable=true
        adjstble.dataset['index']=i
        //adjstble.style.resize='horizontal'
        new ResizeObserver(resizeAdjustable).observe(adjstble)
        container.appendChild(adjstble)
    })
}
renderAdjustable3()