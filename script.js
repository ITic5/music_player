let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");
let backwardButton = document.querySelector(".fa-backward");
let forwardButton = document.querySelector(".fa-forward");

song.onloadedmetadata = function(){
    progress.max = song.duration;
}

function playPause(){
    if(song.paused){
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

function rewindBackward(){
    song.currentTime -= 5;
}

function rewindForward(){
    song.currentTime += 5;
}

song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

progress.addEventListener('input', function () {
    song.currentTime = progress.value;
});

backwardButton.addEventListener('click', rewindBackward);
forwardButton.addEventListener('click', rewindForward);

controlIcon.addEventListener('click', playPause);
