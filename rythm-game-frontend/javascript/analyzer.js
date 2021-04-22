<<<<<<< HEAD
console.log('Analyzer.js loaded');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElem = document.querySelector('audio');

togglePlayPause();
=======
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.querySelector('audio');
>>>>>>> main

let audioState = {
    isReplay : false,
    isPaused : true,
};

<<<<<<< HEAD
const source = audioCtx.createMediaElementSource(audioElem);
=======
const source = audioCtx.createMediaElementSource(audioElement);
>>>>>>> main
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;

source.connect(analyser);
analyser.connect(audioCtx.destination);

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

var flag = false;
var flag2 = false;
var arrowCnt = 0;

function delay() {
    analyser.getByteFrequencyData(dataArray);

    if (dataArray[0] != 255 && arrowCnt >= 0) {
        if (dataArray[0] >= 220) {
            if (flag == false) {
                console.log("Arrow")
                flag = true;
                arrowCnt++;
                console.log(arrowCnt)
                setTimeout(() => {
                    flag = false;
                }, 1400);
            }
        }
    }
    else {
        if (arrowCnt > 0) {
            hit();
        }
    }
    requestAnimationFrame(delay);
}

function hit(){
    analyser.getByteFrequencyData(dataArray);

    if (dataArray[0] == 255) {
        if (flag2 == false) {
            flag2 = true;
            console.log("Arrow Should Hit")
            arrowCnt--;
            console.log(arrowCnt)
            setTimeout(() => {
                flag2 = false;
            }, 1250);
            delay()
        }
    }
}
delay();

function togglePlayPause() {
    audioCtx.resume().then(() => {
        if(audioState.isPaused) {
            audioElement.play();
        } else {
            if(audioState.isReplay) {
                audioElement.play();
                audioState.isReplay = false;
                return;
            }
            audioElement.pause();
        }
        audioState.isPaused = !audioState.isPaused;
    });
}
