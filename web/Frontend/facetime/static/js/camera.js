const videoTag=document.getElementById("camera")
const audioTag=document.getElementById("audio")

const recVideoBtn=document.getElementById("rec_camera")
const recAudioBtn=document.getElementById("rec_audio")

const audioOnly={audio:true,video:false}
const videoConstraints={audio:true,video:false}

recAudioBtn.addEventListener('click',(e)=>{
    mediaStreamSupported()
    navigator.getUserMedia(audioOnly,useMic,failed)
})
recVideoBtn.addEventListener('click',(e)=>{
    mediaStreamSupported()
    navigator.getUserMedia(videoConstraints,videoConference,failed)
})

function mediaStreamSupported(){
    if(navigator.getUserMedia){return true}
    alert("No Media support")
    return false
}
function failed(error){
    alert(JSON.stringify(error))
}
function useMic(stream){
    recAudioBtn.disabled=true
    audioTag.src=stream
    audioTag.play()
    setTimeout(()=>{
        recAudioBtn.disabled=false
        audioTag.controls=true
    },3000)    
}
function videoConference(stream){
    recVideoBtn.disabled=true
    videoTag.src=stream
    setTimeout(()=>{
        videoTag.play()
        recVideoBtn.disabled=false
    },3000) 
}