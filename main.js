let humanScore = 0;
let comptuerScore = 0;
let score = document.querySelector(".score");

// let humanChoice="";



//function for pc logic
function getComputerChoice() {
    let parm1 = Math.random();
    parm1 = parm1 * 3;
    parm1 = Math.floor(parm1);
    if (parm1 == 0) {
        return "rock"
    } else if (parm1 == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


//fuction for human logic
function getHumanChoice() {
    let playerRock = document.querySelector("#rock")
    playerRock.addEventListener("click", () => {
        return "rock";
    })

    let playerPaper = document.querySelector("#paper")
    playerPaper.addEventListener("click", () => {
        return "paper";
    })

    let playerScissors = document.querySelector("#scissors")
    playerScissors.addEventListener("click", () => {
        return "scissors";
    })
}

//one-round game logic
function playRound(humanChoice, ComputerChoice) {
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


function playGame() {
    while (humanScore != 5 && comptuerScore != 5) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        score.textContent = `${humanScore} - ${comptuerScore}`;
    }
}


//i have to make the one game round to be intergrated with humeaCHoice.
//like when i click on rock the rest has to be smth like case(compluter choice...)
//next i ll have a ready humanchoice so i just compare it with pc choice.
 



// console.log(playGame());
// if (humanScore > comptuerScore){
//     console.log("You won!");
// }else{
//     console.log("You lost. :(")
// }