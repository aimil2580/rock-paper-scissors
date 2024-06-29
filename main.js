let humanScore = 0;
let comptuerScore = 0;

//function for pc logic
function getComputerChoice(parm1){
    if (parm1 >= 0 && parm1 < 0.33){
        return "rock"
    }else if (parm1 >= 0.33 && parm1 < 0.66){
           return "paper"
    }else{
        return "scissors"
    }
}
// console.log(getComputerChoice(Math.random()))

//fuction for human logic
function getHumanChoice(parm1){
    let correctParam = parm1.toLowerCase()
    return correctParam
}
// console.log(getHumanChoice(prompt("rock paper or scissors?")));

//one-round game logic
function playRound(humanChoice,ComputerChoice){
    switch (humanChoice) {
        case "rock":
            switch (ComputerChoice) {
                case "rock":
                    return "it's a tie! no one get points";
                case "paper":
                    return "You lose! Paper beats rock :("
                case "scissors":
                    return "You win! Rock beats scissors ;)";
            }
        case "paper":
            switch (ComputerChoice) {
                case "rock":
                    return "You win! Paper beats rock ;)";
                case "paper":
                    return "it's a tie! no one get points"
                case "scissors":
                    return "You lose! Scissors beats paper :(";
            }
        case "scissors":
            switch (ComputerChoice) {
                case "rock":
                    return "You lose! Rock beats scissors :(";
                case "paper":
                    return "You win! Scissors beats paper ;)"
                case "scissors":
                    return "it's a tie! no one get points";
            }                
        }
    }

console.log(playRound(getHumanChoice(prompt("rock paper or scissors")),getComputerChoice(Math.random())));