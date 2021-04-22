const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.querySelector('audio');

let audioState = {
    isReplay : false,
    isPaused : true,
};

const source = audioCtx.createMediaElementSource(audioElement);
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
        if (dataArray[0] >= 228) {
            if (flag == false) {
                console.log("Arrow")
                flag = true;
                arrowCnt++;
                drawBall();
                console.log(arrowCnt)
                setTimeout(() => {
                    flag = false;
                }, 500); // <= What is this for
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

//Action when the round is over
audioElement.onended = function() {
    endGame();
};
