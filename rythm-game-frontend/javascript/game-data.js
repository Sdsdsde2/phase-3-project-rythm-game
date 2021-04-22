let inGame = false
let score = 0;
let easyKeysToBeClicked = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
let normalKeysToBeClicked = [...easyKeysToBeClicked, "KeyW", "KeyA", "KeyS", "KeyD"]
let chosenKey = [] //Used to check the expected key to be hit
let scoreMultiplier = 1;
let songChoice = document.getElementById('audio')
let isHit = false

console.log('game-data.js Fully loaded')
