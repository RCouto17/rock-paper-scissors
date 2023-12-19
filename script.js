let playerWin = 0;
let pcWin = 0;
let playerChoice = '';
let pcChoice= '';
const container = document.querySelector('.container');
const pcScore = document.querySelector('.pc-score');
const playerScore = document.querySelector('.player-score');
const divPC = document.createElement('div');
const divResult = document.createElement('div');
const scoreContainer = document.querySelector('.score-container');
const winner = document.createElement('div');

function getComputerChoice() {
    let numChoice = Math.random();
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'ROCK'){
        if (computerSelection == 'ROCK'){
            divPC.textContent = 'PC chose 🪨'; 
            container.appendChild(divPC)
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'PAPER'){
            divPC.textContent = 'PC chose 📜'; 
            container.appendChild(divPC);
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
            pcScore.textContent = pcWin;
        }
        else if (computerSelection == 'SCISSORS'){
            divPC.textContent = 'PC chose ✂️'; 
            container.appendChild(divPC);
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
            playerScore.textContent = playerWin;
        }
    }
    else if (playerSelection == 'PAPER'){
        if (computerSelection == 'PAPER'){
            divPC.textContent = 'PC chose 📜'; 
            container.appendChild(divPC);
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'SCISSORS'){
            divPC.textContent = 'PC chose ✂️'; 
            container.appendChild(divPC);
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
            pcScore.textContent = pcWin;
        }
        else if (computerSelection == 'ROCK') {
            divPC.textContent = 'PC chose 🪨'; 
            container.appendChild(divPC)
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
            playerScore.textContent = playerWin;
        }
    }
    else if (playerSelection == 'SCISSORS'){
        if (computerSelection == 'SCISSORS'){
            divPC.textContent = 'PC chose ✂️'; 
            container.appendChild(divPC);
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'ROCK'){
            divPC.textContent = 'PC chose 🪨'; 
            container.appendChild(divPC)
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
            pcScore.textContent = pcWin;
        }
        else if (computerSelection == 'PAPER'){
            divPC.textContent = 'PC chose 📜'; 
            container.appendChild(divPC);
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
            playerScore.textContent = playerWin;
        }
    }
    else{
        console.log('You have not chosen rock, paper or scissors, press F5 to try again.');
    }


    if (playerWin == 5) {
        winner.textContent = 'Player won';
        winner.classList.add('winner');  

        if (!scoreContainer.contains(winner)) {
            scoreContainer.appendChild(winner);
        }

        playerWin = 0;
        playerScore.textContent = playerWin;
        pcWin = 0;
        pcScore.textContent = pcWin;
    } else if (pcWin == 5) {
        winner.textContent = 'PC won';
        winner.classList.add('winner'); 

        if (!scoreContainer.contains(winner)) {
            scoreContainer.appendChild(winner);
        }

        playerWin = 0;
        playerScore.textContent = playerWin;
        pcWin = 0;
        pcScore.textContent = pcWin;
    }
    console.log(playerWin);
    console.log(pcWin);
  }


const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => {playerChoice = 'ROCK'
    playRound(playerChoice, getComputerChoice());
});

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => {playerChoice = 'PAPER'
    playRound(playerChoice, getComputerChoice());
});

const btnScissors = document.querySelector('.btn-scissors');
btnScissors.addEventListener('click', () => {playerChoice = 'SCISSORS'
    playRound(playerChoice, getComputerChoice());
});
