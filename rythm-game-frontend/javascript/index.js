let gameStarted = false
let main = document.getElementsByClassName('main-game')[0]
gameStarted = true

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.code=="ArrowUp"){
        console.log(` "${e.code}" was clicked`)
        createCircle();
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

function createCircle(){
    let circle = document.createElement('div')
    circle.id = "gamecircle"
    circle.style.height = '100px';
    circle.style.width = '100px';
    circle.style.backgroundColor = '#bbb';
    circle.style.borderRadius = '50%';

    main.append(circle)
}

function myFunction() {
    document.getElementById("gamecircle").style.animation = "mynewmove 4s 20";
}


// function createCircle(){
//     let circle = document.createElement('div')
//     circle.className = "a"
//     console.log(circle.style)

//     main.append(circle)
//     // document.getElementsByClassName('a')[0].className += " b"
// }


console.log('index.js fully loaded')
