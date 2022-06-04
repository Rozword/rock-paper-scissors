
const hand = ["rock", "paper", "scissors"];
function computerPlay(){
    return hand[Math.floor(Math.random() * hand.length)];
}

function playRound (){
    let playerSelection= prompt("Rock, Paper, Scissors!", "choose").toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    

    function play(){
    if ((playerSelection==="rock")&&(computerSelection==="scissors")) {
     return "You win! Rock beats Scissors";    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="rock")){
     return "You win! Paper beats Rock";    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="paper")){
     return "You win! Scissors beats Paper";    
    }
    else if ((playerSelection==="rock")&&(computerSelection==="paper")){
     return "You lose! Paper beats Rock";    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="scissors")){
     return "You lose! Scissors beats Paper";    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="rock")){
     return "You lose! Rock beats Scissors";    
    }
    else if (playerSelection===computerSelection){
     return "Draw!"
    }
    else{
        return "Error!"
    }
    }
    const result = play();

    return result;
    

 }
 console.log (playRound());