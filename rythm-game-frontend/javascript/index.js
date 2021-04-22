document.addEventListener("DOMContentLoaded", ()=>{
    console.log("index.js fully loaded")
    startGameBtn()
    controlsLol()
})

function startGameBtn(){
    const button = document.querySelector('#start-game')
    button.addEventListener("click",()=>{
        hide('#mainp')
        console.log('clicked')
        show('.container')
        setTimeout(() => {
            startRound();
        }, 5000);
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