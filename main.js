let humanScore = 0;
let comptuerScore = 0;

//function for pc logic
function getComputerChoice(){
    let parm1 = Math.random();
    parm1 = parm1*3;
    parm1 = Math.floor(parm1);
    if (parm1 == 0){
        return "rock"
    }else if (parm1 == 1){
           return "paper"
    }else{
        return "scissors"
    }
}


//fuction for human logic
// function getHumanChoice(parm1){
//     let correctParam = parm1.toLowerCase();
//     if (correctParam == "r"){
//         return "rock";
//     }
//     if (correctParam == "p"){
//         return "paper";
//     }
//     if (correctParam == "s"){
//         return "scissors";
//     }
//     return correctParam;
// }

//one-round game logic
function playRound(humanChoice,ComputerChoice){
    switch (humanChoice) {
        case "rock":
            switch (ComputerChoice) {
                case "rock":
                    return "it's a tie! no one get points";
                case "paper":
                    comptuerScore++;
                    return "You lose! Paper beats rock :("
                case "scissors":
                    humanScore++;
                    return "You win! Rock beats scissors ;)";
            }
        case "paper":
            switch (ComputerChoice) {
                case "rock":
                    humanScore++;
                    return "You win! Paper beats rock ;)";
                case "paper":
                    return "it's a tie! no one get points"
                case "scissors":
                    comptuerScore++;
                    return "You lose! Scissors beats paper :(";
            }
        case "scissors":
            switch (ComputerChoice) {
                case "rock":
                    comptuerScore++;
                    return "You lose! Rock beats scissors :(";
                case "paper":
                    humanScore++;
                    return "You win! Scissors beats paper ;)"
                case "scissors":
                    return "it's a tie! no one get points";
            }                
        }
    }


// function playGame(){
//     while (humanScore !=5 && comptuerScore !=5 ){
//         console.log(playRound(getHumanChoice(prompt("rock paper or scissors")),getComputerChoice()));
//         console.log("You:",humanScore,"Computer:",comptuerScore)
//     }
// } 
let humanChoice="";
let playerRock = document.querySelector("#rock")
playerRock.addEventListener("click" ,  () => {
    humanChoice = "rock";
})

let playerPaper = document.querySelector("#paper")
playerPaper.addEventListener("click" ,  () => {
    humanChoice = "paper";
})

let playerScissors = document.querySelector("#scissors")
playerScissors.addEventListener("click" ,  () => {
    humanChoice = "scissors";
})

let score = document.querySelector(".score");
score.textContent = `${humanScore} - ${comptuerScore}`
// console.log(playGame());
// if (humanScore > comptuerScore){
//     console.log("You won!");
// }else{
//     console.log("You lost. :(")
// }