//Starts the game
function startRound() {
    let balls = document.querySelector('.balls')
    togglePlayPause();
    startLogKey();
    toggleVideo();
}

//Keydown function 
//Used so that user wont keep stacking up on points
function startLogKey() {
    document.addEventListener('keydown', logKey)

    function logKey(e) {
        if (e.code == chosenKey && isHit == false) {
            isHit = true
            hitAnimation()
            addPoints()
        } else if (e.code == chosenKey && isHit == true) {
        } else if (e.code !== chosenKey && isHit == false) {
            isHit = true
            missAnimation()
            removePoints()
        } else {
        }
    }
}

//Chooses which ball to display for the game at random
function drawBall() {
    let ball = document.getElementsByClassName(`balls`)[0]

    ball.removeAttribute("id", "hit")
    ball.removeAttribute("id", "miss")

    ball.hidden = false
    isHit = false
    chosenKey = `${normalKeysToBeClicked[Math.floor(Math.random() * 8) + 0]}`
    ball.innerHTML = ` <center><h1><br>${chosenKey}</h1></center>`
    ball.style.top = `${Math.floor(Math.random() * 50) + 1}%`
    ball.style.left = `${Math.floor(Math.random() * 73) + 1}%`
}

function addPoints() {
    score = (score * scoreMultiplier) + 1
    let displayScore = document.getElementById('score')
    displayScore.innerText = `Score: ${score}`
}

function removePoints() {
    score = score - 1
    let displayScore = document.getElementById('score')
    displayScore.innerText = `Score: ${score}`
}

function hitAnimation() {
    let ball = document.getElementsByClassName(`balls`)[0]
    ball.setAttribute("id", "hit")
}

function missAnimation() {
    let ball = document.getElementsByClassName(`balls`)[0]
    ball.setAttribute("id", "miss")
}

function endGame(){
    toggleVideo()
    let scoreBtn = document.getElementById('scoreBtn')

    hide('#mainp')
    hide('.container')
    show('#scoreBtn')
    
    if (uName != '') {
        console.log(`Player Name: ${uName}`)
        console.log(`Player Score: ${score}`)
    }

    scoreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        createUser()
    }) 
}

function startGame(){
    hide('#mainp')
    show('.container')
}

function timeLeft(){
    let displayTime = document.getElementById('time')
    setTimeout(() => {
        displayTime.innerText = `Time Left: ${((audioDur - audioElement.currentTime) / 60).toFixed(2)}`
        timeLeft();
    }, 600);
}

function toggleVideo(){
    let video = document.querySelector('#video')
    if(video.hidden == true){
        video.hidden = false
        video.play()
    }else{
        video.hidden = true
        video.pause()
    }
}

// drawBall();

//5 second wait (testing purposes)
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//                 setTimeout(() => {
//                     console.log(5)
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
