
const hand = ["rock", "paper", "scissors"];
function computerPlay(){
    return hand[Math.floor(Math.random() * hand.length)];
}

let playerName= prompt("Enter your name", "");
let playerScore = (0);
let computerScore = (0);
let draw = (0);

function playRound (){
   
    let playerSelection;
    do {
        playerSelection= prompt("Rock, Paper, Scissors!", "choose").toLowerCase();
    }     
    while (playerSelection !=="rock" && playerSelection !=="paper" && playerSelection !=="scissors")    
        
    let computerSelection = computerPlay();
    console.log(computerSelection);
    
    function play(){
    if ((playerSelection==="rock")&&(computerSelection==="scissors")) {
     alert ("You win this round! Rock beats Scissors\nScore: " + (playerName) + ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));   
    }
    else if ((playerSelection==="paper")&&(computerSelection==="rock")){
        alert ( "You win this round! Paper beats Rock\nScore: " + (playerName) + ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));    
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="paper")){
        alert ( "You win this round! Scissors beats Paper\nScore: " + (playerName)+ ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));    
    }
    else if ((playerSelection==="rock")&&(computerSelection==="paper")){
        alert ( "You lose this round! Paper beats Rock\nScore: " + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));    
    }
    else if ((playerSelection==="paper")&&(computerSelection==="scissors")){
        alert ( "You lose this round! Scissors beats Paper\nScore: " + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));   
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="rock")){
     alert ( "You lose this round! Rock beats Scissors\nScore: " + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));  
    }
    else if (playerSelection===computerSelection){
        alert ( "Draw!\nScore: " + (playerName)+ ": " + (playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (++draw));  
    }
    else{     
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
    alert(playerName + " is the winner of the game!");                
}
else if (parseInt(playerScore) < parseInt(computerScore)){
    alert ("Computer is the winner of the game!");
}
else {
    alert ("Draw! Nobody wins :c")
}
}
console.log (game());