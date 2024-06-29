console.log('hello world');
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