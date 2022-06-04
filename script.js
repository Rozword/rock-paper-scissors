
const hand = ["rock", "paper", "scissors"];
function computerPlay(){
    return hand[Math.floor(Math.random() * hand.length)];
}

let playerScore = (0);
let computerScore = (0);


function playRound (){
    let playerSelection= prompt("Rock, Paper, Scissors!", "choose").toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    

    function play(){
    if ((playerSelection==="rock")&&(computerSelection==="scissors")) {
     return "You win! Rock beats Scissors\nScore: Player " + ((playerScore)+1) + " Computer " + (computerScore);    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="rock")){
     return "You win! Paper beats Rock\nScore: Player " + ((playerScore)+1) + " Computer " + (computerScore);;    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="paper")){
     return "You win! Scissors beats Paper\nScore: Player " + ((playerScore)+1) + " Computer " + (computerScore);    
    }
    else if ((playerSelection==="rock")&&(computerSelection==="paper")){
     return "You lose! Paper beats Rock\nScore: Player " + (playerScore) + " Computer " + ((computerScore)+1);    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="scissors")){
     return "You lose! Scissors beats Paper\nScore: Player " + (playerScore) + " Computer " + ((computerScore)+1);    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="rock")){
     return "You lose! Rock beats Scissors\nScore: Player " + (playerScore) + " Computer " + ((computerScore)+1);    
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
 