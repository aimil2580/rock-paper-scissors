let humanScore = 0;
let comptuerScore = 0;
const score = document.querySelector(".score");
const messageBox = document.querySelector(".winLoseMes")
const win = "Game over, YOU WIN!";
const lose = "Game over, YOU LOSE :((";
const playerMove = document.querySelector(".pcol")
const computerMove = document.querySelector(".ccol")

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


//one round logic with human interaction
function getHumanChoice() {
    let playerRock = document.querySelector("#rock")
    playerRock.addEventListener("click", () => {
        if (humanScore != 5 && comptuerScore != 5) {
            //human display selection
            const div = document.createElement("div");
            div.classList.add("moves")
            div.textContent = "Rock";
            playerMove.appendChild(div)
            //display selection for pc
            const divPc = document.createElement("div")
            divPc.classList.add("moves")

            switch (getComputerChoice()) {
                case "rock":

                    divPc.textContent = "Rock"
                    computerMove.appendChild(divPc)
                    messageBox.textContent = "it's a tie! no one gets points";
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "paper":
                    comptuerScore++;
                    if (comptuerScore == 5) {
                        messageBox.textContent = lose
                    } else {
                        messageBox.textContent = "You lose! Paper beats rock :(";
                    }
                    divPc.textContent = "Paper"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "scissors":
                    humanScore++;
                    if (humanScore == 5) {
                        messageBox.textContent = win
                    } else {
                        messageBox.textContent = "You win! Rock beats scissors ;)";
                    }
                    divPc.textContent = "Scissors"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
            }
        }
    })

    let playerPaper = document.querySelector("#paper")
    playerPaper.addEventListener("click", () => {
        if (humanScore != 5 && comptuerScore != 5) {
            //human display selection
            const div = document.createElement("div");
            div.classList.add("moves")
            div.textContent = "Paper";
            playerMove.appendChild(div)

            const divPc = document.createElement("div")
            divPc.classList.add("moves")

            switch (getComputerChoice()) {
                case "rock":
                    humanScore++;
                    if (humanScore == 5) {
                        messageBox.textContent = win
                    } else {
                        messageBox.textContent = "You win! Paper beats rock ;)";
                    }
                    divPc.textContent = "Rock"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "paper":
                    divPc.textContent = "Paper"
                    computerMove.appendChild(divPc)
                    messageBox.textContent = "it's a tie! no one gets points"
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "scissors":
                    comptuerScore++;
                    if (comptuerScore == 5) {
                        messageBox.textContent = lose
                    } else {
                        messageBox.textContent = "You lose! Scissors beats paper :(";
                    }
                    divPc.textContent = "Scissors"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
            }
        }
    })

    let playerScissors = document.querySelector("#scissors")
    playerScissors.addEventListener("click", () => {
        if (humanScore != 5 && comptuerScore != 5) {
            //human display selection
            const div = document.createElement("div");
            div.classList.add("moves")
            div.textContent = "Scissors";
            playerMove.appendChild(div)

            const divPc = document.createElement("div")
            divPc.classList.add("moves")

            switch (getComputerChoice()) {
                case "rock":
                    comptuerScore++;
                    if (comptuerScore == 5) {
                        messageBox.textContent = lose
                    } else {
                        messageBox.textContent = "You lose! Rock beats scissors :(";
                    }
                    divPc.textContent = "Rock"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "paper":
                    humanScore++;
                    if (humanScore == 5) {
                        messageBox.textContent = win
                    } else {
                        messageBox.textContent = "You win! Scissors beats paper ;)"
                    }
                    divPc.textContent = "Paper"
                    computerMove.appendChild(divPc)
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
                case "scissors":
                    divPc.textContent = "Scissors"
                    computerMove.appendChild(divPc)
                    messageBox.textContent = "it's a tie! no one gets points";
                    score.textContent = `${humanScore} - ${comptuerScore}`;
                    break;
            }
        }
    })
}
console.log(getHumanChoice())
