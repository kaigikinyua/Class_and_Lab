const videoTag=document.getElementById("camera")
const audioTag=document.getElementById("audio")

const recVideoBtn=document.getElementById("rec_camera")
const recAudioBtn=document.getElementById("rec_audio")

const audioOnly={audio:true,video:false}
const videoConstraints={audio:true,video:true}

recAudioBtn.addEventListener('click',(e)=>{
    mediaStreamSupported()
    navigator.getUserMedia(audioOnly,useMic,failed)
})
recVideoBtn.addEventListener('click',(e)=>{
    mediaStreamSupported()
    navigator.getUserMedia(videoConstraints,videoConference,failed)
})

function mediaStreamSupported(){
    if(navigator.mediaDevices.getUserMedia){return true}
    alert("No Media support")
    return false
}
function failed(error){
    alert(JSON.stringify(error))
}
function useMic(stream){
    recAudioBtn.disabled=true
    audioTag.srcObject=stream
    audioTag.play()
    var x=document.querySelector("div.audio_display")
    x.classList.add("active_audio")    
}
function videoConference(stream){
    recVideoBtn.disabled=true
    videoTag.srcObject=stream
    videoTag.play() 
}