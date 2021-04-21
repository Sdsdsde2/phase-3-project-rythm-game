let gameStarted = false
gameStarted = true

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.code=="ArrowUp"){
        console.log(` "${e.code}" was clicked`)
    }else if(e.code=="ArrowDown"){
        console.log(` "${e.code}" was clicked`) 
    }else if(e.code=="ArrowLeft"){
        console.log(` "${e.code}" was clicked`)
    }else if(e.code=="ArrowRight"){
        console.log(` "${e.code}" was clicked`) 
    }else{
        console.log('Other key was pressed') //removing after finish
    }
}



console.log('index.js loaded')
