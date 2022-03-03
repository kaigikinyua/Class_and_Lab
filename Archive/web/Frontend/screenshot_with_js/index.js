const capture = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const video = document.createElement("video");
  
    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia();
      video.srcObject = captureStream;
      var myImage=context.drawImage(video, 0, 0, window.width, window.height);
      displayImage(captureStream.getTracks()[0])
      const frame = canvas.toDataURL("image/png");
      captureStream.getTracks().forEach(track => track.stop());
      window.location.href = frame;
    } catch (err) {
      console.error("Error: " + err);
    }
  };
  
capture();
function displayImage(image){
    console.log(image)
    var img=document.createElement('image')
    img.src=image 
}