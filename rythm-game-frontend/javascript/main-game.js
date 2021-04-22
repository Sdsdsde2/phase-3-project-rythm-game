let inGame = false
let score = 0;
let easyKeysToBeClicked = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
let normalKeysToBeClicked = [...easyKeysToBeClicked, "KeyW", "KeyA", "KeyS", "KeyD"]
let chosenKey = [] //Used to check the expected key to be hit

function startRound() {
    let balls = document.querySelector('.balls')
    balls.hidden = false
    drawBall();
    togglePlayPause();
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

// console.log(document.getElementsByClassName(`balls`))
// let ball = document.getElementsByClassName(`balls`)[0]
// let children = ball.childNodes
// console.log(children)

//Chooses which ball to display for the game at random
function drawBall() {
    let ball = document.getElementsByClassName(`balls`)[0]
    
    // let children = ball.childNodes[0]
    // console.log(children)

    // let ball = document.getElementById(`ball${Math.floor(Math.random() * 4) + 1}`)
    // let ball = document.querySelector(`#ball${Math.floor(Math.random() * 4) + 1}`)
    ball.hidden = false
    chosenKey = `${normalKeysToBeClicked[Math.floor(Math.random() * 8) + 0]}`
    console.log(Math.floor(Math.random() * 50) + 1 + " " +Math.floor(Math.random() * 73) + 1 )
    ball.innerHTML = ` <center><h1>${chosenKey}</h1></center>`
    console.log('ball loaded')
    ball.style.top = `${Math.floor(Math.random() * 50) + 1}%`
    ball.style.left = `${Math.floor(Math.random() * 73) + 1}%`
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
