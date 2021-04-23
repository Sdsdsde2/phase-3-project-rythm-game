let namebox = document.getElementById('username-input')
let saveBtn = document.getElementById('saveBtn')
let uName = ' '

saveBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    uName = namebox.value
    hide('.username-creation')
    alert("Warning this game contains a very scary surprise for any player who falls into the negative points area... Play at your own risk.");
    startGame();
    setTimeout(() => {
        startRound();
        timeLeft();
    }, 150);
})

function createUser() {
    const user = {
        username: uName,
        topScore: score,
        level: 1,
        dateCreated: Date.now()
    }

    const userPackage = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch('http://localhost:3000/api/v1/users', userPackage)
    .then(resp => resp.json())
    .then(data => console.log(data))
}