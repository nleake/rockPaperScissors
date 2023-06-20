console.log('time to play rock paper scissors');
const score = {
    player: 0,
    cpu: 0,
}
function getPlayerChoice () {
    let playerSelection = prompt('what do you throw?').toLowerCase();
    return playerSelection;
}

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock'){ 
            return 'tie, try again';
        } else if (computerSelection === 'paper') {
            score.cpu++;
            return 'you lose';
        } else if (computerSelection === 'scissors') {
            score.player++;
            return 'you win';
        } else return 'uhhh, try again';
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock'){ 
            score.player++;
            return 'you win';
        } else if (computerSelection === 'paper') {
            return 'tie, try again';
        } else if (computerSelection === 'scissors') {
            score.cpu++;
            return 'you lose';
        } else return 'uhhh, try again';
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){ 
            score.cpu++
            return 'you lose';
        } else if (computerSelection === 'paper') {
            score.player++
            return 'you win';
        } else if (computerSelection === 'scissors') {
            return 'tie, try again';
        } else return 'uhhh, try again';
    }
  }

  function game(rounds){

    for (let index = 0; index < rounds; index++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound();
        console.log(`computer throws ${computerSelection}, you threw ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));
    }
    console.log(score)
  }

  game(5);


