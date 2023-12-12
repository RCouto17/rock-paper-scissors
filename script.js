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
    console.log(pcChoice);
    return pcChoice;
};

getComputerChoice();