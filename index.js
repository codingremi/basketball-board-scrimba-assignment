let homeScore = document.getElementById("score-home")
let currentScore = parseInt(homeScore.textContent)

let guestScore = document.getElementById("score-guest")
let currentScore2 = parseInt(guestScore.textContent)

function add1home() {
    currentScore += 1; // add 1
    homeScore.textContent = currentScore; // update screen
}

function add2home() {
    let currentScore = parseInt(homeScore.textContent); // get number
    currentScore += 2; // add 1
    homeScore.textContent = currentScore; // update screen
}

function add3home() {
    let currentScore = parseInt(homeScore.textContent); // get number
    currentScore += 3; // add 1
    homeScore.textContent = currentScore; // update screen
}



function add1guest() {
    currentScore2 += 1; // add 1
    guestScore.textContent = currentScore2; // update screen
}

function add2guest() {
    currentScore2 += 2; // add 1
    guestScore.textContent = currentScore2; // update screen
}

function add3guest() {
    currentScore2 += 3; // add 1
    guestScore.textContent = currentScore2; // update screen
}



