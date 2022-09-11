/* This program will not have a UI (yet), we will write to the console.
    This program we will play rock, paper, scissors vs. the computer.
    The desired outcome is that the computer randomly 1 of the 3
    choices each game/run.  */

    function getComputerChoice() {
        
        let value = ['Rock', 'Paper', 'Scissors'];
            let randomValue = value[Math.floor(Math.random() * value.length)];

            console.log(randomValue);
    }

    console.log(getComputerChoice());