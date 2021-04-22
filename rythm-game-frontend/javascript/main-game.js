let inGame = false
let score = 0;
let easyKeysToBeClicked = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
let normalKeysToBeClicked = [...easyKeysToBeClicked, "KeyW", "KeyA", "KeyS", "KeyD"]
let chosenKey = [] //Used to check the expected key to be hit

function startRound() {
    let balls = document.querySelector('.balls')
    balls.hidden = false
    drawBall();
}



document.addEventListener('keydown', logKey)
function logKey(e) {
    if (e.code == chosenKey) {
        console.log('HIT!')
        score += 1
    } else {
        console.log(e.code + "missed")
        score -= 1
    }
    console.log(score)
}

//Chooses which ball to display for the game at random
function drawBall() {
    let ball = document.querySelector(`#ball${Math.floor(Math.random() * 4) + 1}`)
    ball.hidden = false
    ball.style.top = `${Math.floor(Math.random() * 50) + 1}%`
    ball.style.left = `${Math.floor(Math.random() * 73) + 1}%`
    chosenKey = `${normalKeysToBeClicked[Math.floor(Math.random() * 8) + 0]}`
    ball.innerHTML = ` <center><h1>${chosenKey}</h1></center>`
    console.log('ball loaded')
}
// drawBall();


//five second wait (testing purposes)
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
