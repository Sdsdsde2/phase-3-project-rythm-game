let hs = document.querySelector('.scores')
let br = document.createElement('br')

function getScores() {
fetch('http://localhost:3000/api/v1/users')
.then(resp => resp.json())
.then(scores => { 
    scores.sort((a, b) => (a.topScore < b.topScore) ? 1 : (b.topScore < a.topScore) ? -1 : 0)
    scores.forEach(showScores)
})
}

function showScores(s) {
    let hScore = document.createElement('h1')
    hScore.innerText += `${s.username} - ${s.topScore} points.`

    hs.append(hScore)
    hs.append(br)
}