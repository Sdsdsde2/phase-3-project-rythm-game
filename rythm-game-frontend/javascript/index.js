document.addEventListener("DOMContentLoaded", ()=>{
    console.log("index.js fully loaded")
    createrUserBtn()
    startGameBtn()
    highscoreBtn()
    controlsLol()
})

function createrUserBtn(){
    const button = document.querySelector('#create-username')
    button.addEventListener("click",()=>{
        hide('#mainp')
        console.log('clicked')
        show('.username-creation')
    })
}

function startGameBtn(){
    const button = document.querySelector('#start-game')
    button.addEventListener("click",()=>{
        startGame();
        console.log('clicked')
        setTimeout(() => {
            startRound();
        }, 35);
    })
}

function highscoreBtn(){
    const button = document.querySelector('#high-scores')
    button.addEventListener("click",()=>{
        hide('#mainp')
        console.log('clicked')
        show('.highscores')
    })
}

function show(page){
    document.querySelector(`${page}`).hidden = false
}

function hide(page){
    document.querySelector(`${page}`).hidden = true
}

function controlsLol(){
    let lol = document.querySelector('#controls')
    lol.addEventListener("click", ()=>{
        lol.innerText = "Just click the key that shows up on the screen it isn't that hard"
    })
}


