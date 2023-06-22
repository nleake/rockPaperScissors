const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const newGameButton = document.querySelector('.newGame');

const scoreView = document.querySelector('.score');
const cpuChoice = document.querySelector('.cpuChoice');
const results = document.querySelector('.results');

const roundView = document.querySelector('#round');
let playerScore = document.querySelector('#playerScore');
let cpuScore = document.querySelector('#cpuScore');

let gameOver = false;
let round = 1;
const score = {
    player: 0,
    cpu: 0,
}

rockButton.addEventListener('click', throwRock);
paperButton.addEventListener('click', throwPaper);
scissorsButton.addEventListener('click', throwScissors);
newGameButton.addEventListener('click', newGame);

function newGame() {
    gameOver = false;
    round = 1;
    score.player = 0;
    score.cpu = 0;
    updateView();
    clearResults();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function updateView() {
    playerScore.innerText = score.player;
    cpuScore.innerText = score.cpu;
    roundView.innerText = round;
}

function clearResults() {
    results.innerText = "";
    cpuChoice.innerText = "";
}


function getPlayerChoice () {
    let playerSelection = prompt('what do you throw?').toLowerCase();
    return playerSelection;
}

function throwRock() {
    clearResults();
    let computerSelection = computerThrow();
    if (computerSelection === 'scissors') {
        playerWins();
    } else if (computerSelection === 'rock') {
        tie();
    } else {
        computerWins();
    }
}

function throwPaper() {
    clearResults();
    let computerSelection = computerThrow();
    if (computerSelection === 'rock') {
        playerWins();
    } else if (computerSelection === 'paper') {
        tie();
    } else {
        computerWins();
    }
}

function throwScissors() {
    clearResults();
    let computerSelection = computerThrow();
    if (computerSelection === 'paper') {
        playerWins();
    } else if (computerSelection === 'scissors') {
        tie();
    } else {
        computerWins();
    }
}

function computerThrow () {
    let choices = ["rock", "paper", "scissors"];
    let compThrow = choices[Math.floor(Math.random() * 3)];
    cpuChoice.innerText = `Computer throws ${compThrow}!`;
    return compThrow;
}


function playerWins() {
    round++;
    score.player++;
    results.innerText = 'You win this round, human.'
    updateView();
    checkWinner();
}

function computerWins() {
    round++;
    score.cpu++;
    results.innerText = 'You lose this round, meatbag.'
    updateView();
    checkWinner();
}

function tie() {
    round++;
    results.innerText = 'This round is a tie.';
    updateView();
}

function checkWinner() {
    if (score.player >= 5) {
        results.innerText = 'You have won the game. Humanity flourishes.'
        disableButtons()
    } else if (score.cpu >=5) {
        results.innerText = 'You have lost the game. Machines triumph over mankind.'
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

