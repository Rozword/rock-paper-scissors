
const hand = ["rock", "paper", "scissors"];
function computerPlay(){
    return hand[Math.floor(Math.random() * hand.length)];
}

let playerScore = (0);
let computerScore = (0);
let draw = (0);


function playRound (){
    let playerSelection= prompt("Rock, Paper, Scissors!", "choose").toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    

    function play(){
    if ((playerSelection==="rock")&&(computerSelection==="scissors")) {
     return "You win this round! Rock beats Scissors\nScore: Player " + (++playerScore) + " Computer " + (computerScore) + " Draw: " + (draw);   
    }
    else if ((playerSelection==="paper")&&(computerSelection==="rock")){
     return "You win this round! Paper beats Rock\nScore: Player " + (++playerScore) + " Computer " + (computerScore) + " Draw: " + (draw);    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="paper")){
     return "You win this round! Scissors beats Paper\nScore: Player " + (++playerScore) + " Computer " + (computerScore) + " Draw: " + (draw);    
    }
    else if ((playerSelection==="rock")&&(computerSelection==="paper")){
     return "You lose this round! Paper beats Rock\nScore: Player " + (playerScore) + " Computer " + (++computerScore) + " Draw: " + (draw);    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="scissors")){
     return "You lose this round! Scissors beats Paper\nScore: Player " + (playerScore) + " Computer " + (++computerScore) + " Draw: " + (draw);   
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="rock")){
     return "You lose this round! Rock beats Scissors\nScore: Player " + (playerScore) + " Computer " + (++computerScore) + " Draw: " + (draw);  
    }
    else if (playerSelection===computerSelection){
     return "Draw!\nScore: Player " + (playerScore) + " Computer " + (computerScore) + " Draw: " + (++draw);  
    }
    else{
        return "Error!"
    }
    }
    const result = play();

    return result;  

   



 }


function game(){
for (let i = 0; i < 5; i++) {
    console.log (playRound()); 
   } 

if (parseInt(playerScore) > parseInt(computerScore)){
    console.log("Player is the winner of the game!");                
}
else if (parseInt(playerScore) < parseInt(computerScore)){
    console.log ("Computer is the winner of the game!");
}
else {
    console.log ("Draw! Nobody wins :c")
}
}

console.log (game());