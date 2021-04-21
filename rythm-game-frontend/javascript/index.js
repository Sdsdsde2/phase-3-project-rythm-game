let gameStarted = false
let main = document.getElementsByClassName('main-game')[0]
gameStarted = true
let circleMatch;
let score = 0;

//remove points but keeps it from going under 0
function removePoints(){
if(score > 0){
    score = score - 1
}
console.log(score)
}

let keysToBeClicked = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]

document.addEventListener('keydown', logKey);

//for testing
createCircle()
//

//used to check if the key matches the key that needs to be pressed
function logKey(e) {
    if(e.code==circleMatch){
        console.log(` "${e.code}" Matched!`)
        score = score + 1
        createCircle()
    }else{
        console.log(`${e.code} Missed!`)
        removePoints()
        createCircle()
    }
    console.log(score)
}

//creates a random circle at a random spot in the box
function createCircle(){
    let circle = document.createElement('div')
    circle.innerText = `${keysToBeClicked[Math.floor(Math.random()*4)+0]}` 
    circleMatch = circle.innerText
    circle.id = "gamecircle"
    circle.style.height = '200px';
    circle.style.width = '200px';
    circle.style.backgroundColor = 'green';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute'
    circle.style.left = `${Math.floor(Math.random()*73)+1}%`
    circle.style.top = `${Math.floor(Math.random()*50)+1}%`
    main.append(circle)
    //temp
    setTimeout(() => {
        circle.remove()
        removePoints()
    }, 1500);
}

function mainGame(){
// Main game mechanics
}

console.log('index.js fully loaded')
