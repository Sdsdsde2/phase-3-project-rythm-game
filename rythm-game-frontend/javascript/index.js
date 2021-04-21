let gameStarted = false
gameStarted = true

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.code=="ArrowUp"){
        console.log(` "${e.code}" was clicked`)
        arrowChange('arrow_up')
    }else if(e.code=="ArrowDown"){
        console.log(` "${e.code}" was clicked`) 
        arrowChange('arrow_down')
    }else if(e.code=="ArrowLeft"){
        console.log(` "${e.code}" was clicked`) 
        arrowChange('arrow_left')
    }else if(e.code=="ArrowRight"){
        console.log(` "${e.code}" was clicked`) 
        arrowChange('arrow_right')
    }else{
        console.log('Other key was pressed') //removing after finish
    }
}

function arrowChange(element){
    let arrow = document.getElementById(element)
    console.log(arrow)
    arrow.style.borderColor = "Blue"
    arrow.classList.add('horizTranslate')
    //
    }

console.log('index.js loaded')
