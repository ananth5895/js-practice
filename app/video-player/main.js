let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    fwBtn = document.getElementById('f10'),
    bwBtn = document.getElementById('b10'),
    volumeupBtn = document.getElementById('volume-up'),
    volumedownBtn = document.getElementById('volume-down'),
    downloadBtn = document.getElementById('download'),
    swapBtn = document.getElementById('swap')
    videoQualityBtn = document.getElementById('vq'),
    video = document.getElementById('main-video'),
    fullScreenBtn = document.getElementById('fs'),
    muteBtn =document.getElementById('mute');

function play() {

      console.log('video play');
    video.play();
}

function pause() {

    console.log('pause');
    video.pause();

}
function forwads10() {

    console.log('f10');
    let cTime = video.currentTime;
    console.log(cTime);
    cTime =cTime + 10;
    video.currentTime = cTime;

}
function back10() {

    console.log('b10');
    let cTime = video.currentTime;
    console.log(cTime);
    cTime =cTime - 10;
    video.currentTime = cTime;

}

function volumeUp() {
    
    console.log('volume-up');
}

function volumedown() {

    console.log('volume-down');
}

function dowmload() {

    console.log('download');
}
function swap(){

    console.log('swap');
}

function quality() {

    console.log('quality');
}

function fullScreen() {

    console.log('fs');
}
function mute() {
    console.log('fs');
}
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
fwBtn.addEventListener('click', forwads10);
bwBtn.addEventListener('click', back10);

volumeupBtn.addEventListener('click', volumeUp);

volumedownBtn.addEventListener('click', volumedown);
downloadBtn.addEventListener('click', dowmload);
swapBtn.addEventListener('click',swap);
videoQualityBtn.addEventListener('click', quality);
fullScreenBtn.addEventListener('click', fullScreen);
muteBtn.addEventListener('click',mute);
