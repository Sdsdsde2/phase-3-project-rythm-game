

//Starts the game
function startRound() {
    let balls = document.querySelector('.balls')
    // balls.hidden = false
    togglePlayPause();
}

//Keydown function 
//Used so that user wont keep stacking up on points
document.addEventListener('keydown', logKey)
function logKey(e) {
    if (e.code == chosenKey && isHit == false) {
        isHit = true
        console.log('HIT!')
        hitAnimation()
        addPoints()
    } else if (e.code == chosenKey && isHit == true) {
    } else if (e.code !== chosenKey && isHit == false) {
        isHit = true
        console.log(e.code + "missed")
        removePoints()
    } else {
    }
    console.log(score)
}

//Chooses which ball to display for the game at random
function drawBall() {
    let ball = document.getElementsByClassName(`balls`)[0]
    console.log(ball)

    ball.hidden = false
    isHit = false
    chosenKey = `${normalKeysToBeClicked[Math.floor(Math.random() * 8) + 0]}`
    ball.innerHTML = ` <center><h1>${chosenKey}</h1></center>`
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
    console.log(score)
}

function hitAnimation() {
    let ball = document.getElementsByClassName(`balls`)[0]
    ball.style.backroundColor='brown'
}

hitAnimation()