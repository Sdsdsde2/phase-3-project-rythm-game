let hs = document.querySelector('.scores')
let br = document.createElement('br')

function getScores() {
fetch('http://localhost:3000/api/v1/scores')
.then(resp => resp.json())
.then(scores => { 
    scores.sort((a, b) => (a.score < b.score) ? 1 : (b.score < a.score) ? -1 : 0)
    scores.forEach(showScores)
})
}

function showScores(s) {
    let newScore = document.createElement('h1')

    fetch(`http://localhost:3000/api/v1/users/${s.user_id}`)
    .then(resp => resp.json())
    .then(user => newScore.innerText += `${user.username} - ${s.score} points.`)

    hs.append(newScore)
    hs.append(br)
}

getScores()