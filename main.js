/* This program will not have a UI (yet), we will write to the console.
    This program we will play rock, paper, scissors vs. the computer.
    The desired outcome is that the computer randomly 1 of the 3
    choices each game/run.  */

    // This function randomly pick 1 of the 3 values //
    function getComputerChoice() {   

        let value = ['Rock', 'Paper', 'Scissors'];
            let randomValue = value[Math.floor(Math.random() * value.length)];

            return (randomValue);
    }

    function playRound(playerSelection, computerSelection) {

        if (computerSelection === 'Scissors') {
            return('You won! Rock beats scissors');
        } 
        else if (computerSelection === 'Paper') {
            return("You lost...Rock loses to paper");
        }
        else {
            return("It's a draw!");
        }
    }

    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));