let playerWin = 0;
let pcWin = 0;
let playerChoice = '';
let pcChoice= '';
const container = document.querySelector('.container');

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
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose rock'; 
            container.appendChild(divPC)
            const divResult = document.createElement('div');
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'PAPER'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose paper'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
        }
        else if (computerSelection == 'SCISSORS'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose scissors'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
        }
    }
    else if (playerSelection == 'PAPER'){
        if (computerSelection == 'PAPER'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose paper'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'SCISSORS'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose scissors'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
            
        }
        else if (computerSelection == 'ROCK') {
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose rock'; 
            container.appendChild(divPC)
            const divResult = document.createElement('div');
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
        }
    }
    else if (playerSelection == 'SCISSORS'){
        if (computerSelection == 'SCISSORS'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose scissors'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'Draw';
            container.appendChild(divResult);
        }
        else if (computerSelection == 'ROCK'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose rock'; 
            container.appendChild(divPC)
            const divResult = document.createElement('div');
            divResult.textContent = 'PC wins';
            container.appendChild(divResult);
            pcWin++;
        }
        else if (computerSelection == 'PAPER'){
            const divPC = document.createElement('div');
            divPC.textContent = 'PC chose paper'; 
            container.appendChild(divPC);
            const divResult = document.createElement('div');
            divResult.textContent = 'Player wins';
            container.appendChild(divResult);
            playerWin++;
        }
    }
    else{
        console.log('You have not chosen rock, paper or scissors, press F5 to try again.');
    }
  }


const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => {playerChoice = 'ROCK'
    playRound(playerChoice, getComputerChoice());
    console.log(pcChoice);
});

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => {playerChoice = 'PAPER'
    playRound(playerChoice, getComputerChoice());
    console.log(pcChoice);
});

const btnScissors = document.querySelector('.btn-scissors');
btnScissors.addEventListener('click', () => {playerChoice = 'SCISSORS'
    playRound(playerChoice, getComputerChoice());
    console.log(pcChoice);
});