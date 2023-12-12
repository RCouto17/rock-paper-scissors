let playerWin = 0;
let pcWin = 0;


function getComputerChoice() {
    let numChoice = Math.random();
    let pcChoice;
    if (numChoice < 0.333){
        pcChoice = 'ROCK';
    }
    else if (numChoice > 0.333 && numChoice < 0.666){
        pcChoice = 'PAPER';
    }
    else if (numChoice > 0.666){
        pcChoice = 'SCISSORS';
    }
    return pcChoice;
}

function getPlayerChoice(){
    return prompt('Choose rock, paper or scissors.').toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'ROCK'){
        if (computerSelection == 'ROCK'){
            console.log('It\'s a draw');
        }
        else if (computerSelection == 'PAPER'){
            console.log('Computer wins');
            pcWin++;
        }
        else{
            console.log('Player wins');
            playerWin++;
        }
    }
    else if (playerSelection == 'PAPER'){
        if (computerSelection == 'PAPER'){
            console.log('It\'s a draw');
        }
        else if (computerSelection == 'SCISSORS'){
            console.log('Computer wins');
            pcWin++;
        }
        else{
            console.log('Player wins');
            playerWin++;
        }
    }
    else if (playerSelection == 'SCISSORS'){
        if (computerSelection == 'SCISSORS'){
            console.log('It\'s a draw');
        }
        else if (computerSelection == 'ROCK'){
            console.log('Computer wins');
            pcWin++;
        }
        else{
            console.log('Player wins');
            playerWin++;
        }
    }
    else{
        console.log('You have not chosen rock, paper or scissors, press F5 to try again.');
    }
  }

function game(){
    for (let i = 1; i <=5; i++){
        playRound(getPlayerChoice(),getComputerChoice());
    }
    if (playerWin > pcWin){
        console.log('Player won');
    }
    else if (pcWin > playerWin){
        console.log('Computer won');
    }
    else console.log('Nobody won');
}
game();