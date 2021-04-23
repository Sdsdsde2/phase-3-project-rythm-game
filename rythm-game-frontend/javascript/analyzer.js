const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.querySelector('audio');
const audioDur = audioElement.duration;

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

function delay() {
    analyser.getByteFrequencyData(dataArray);

    if (dataArray[0] >= 255) {
        if (flag == false) {
            flag = true;
            drawBall();
            setTimeout(() => {
                flag = false;
            }, 900);
        }
    }
    requestAnimationFrame(delay);
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
