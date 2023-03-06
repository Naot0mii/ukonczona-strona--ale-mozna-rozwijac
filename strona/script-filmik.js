var video = document.getElementById('filmik');

function odmutuj(){
  video.muted = !video.muted;
}

document.addEventListener("mouseover", odmutuj());