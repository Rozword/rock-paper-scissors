const hand = ["rock", "paper", "scissors"];
function computerPlay(){
    return hand[Math.floor(Math.random() * hand.length)];
}

let playerName= prompt("Let's play 5 rounds of Rock, Paper, Scissors!", "Enter your name");
let playerScore = (0);
let computerScore = (0);
let draw = (0);

let playerSelection;
let result;

function playRound (){  
    
        
    let computerSelection = computerPlay();
    console.log(computerSelection);
    
    
    if ((playerSelection==="rock")&&(computerSelection==="scissors")) {
        return result = ("Your opponent played " + (computerSelection) + "\n\nYou win this round :D\n\nRock beats Scissors\n\n" + (playerName) + ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));   
        
    }
    else if ((playerSelection==="paper")&&(computerSelection==="rock")){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nYou win this round :D\n\nPaper beats Rock\n\n" + (playerName) + ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));    
        
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="paper")){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nYou win this round :D\n\nScissors beats Paper\n\n" + (playerName)+ ": " + (++playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (draw));    
        
    }
    else if ((playerSelection==="rock")&&(computerSelection==="paper")){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nYou lose this round :c\n\nPaper beats Rock\n\n" + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));    
        
    }
    else if ((playerSelection==="paper")&&(computerSelection==="scissors")){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nYou lose this round :c\n\nScissors beats Paper\n\n" + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));   
        
    }
    else if ((playerSelection==="scissors")&&(computerSelection==="rock")){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nYou lose this round :c\n\nRock beats Scissors\n\n" + (playerName)+ ": " + (playerScore) + " - Computer: " + (++computerScore) + " - Draw: " + (draw));  
        
    }
    else if (playerSelection===computerSelection){
        return result = ( "Your opponent played " + (computerSelection) + "\n\nDraw!\n\n" + (playerName)+ ": " + (playerScore) + " - Computer: " + (computerScore) + " - Draw: " + (++draw));  
        
    }
    else{     
    }
    }   
    
const body = document.querySelector('body')
const container = document.createElement('div');

const ui = document.createElement("div");
ui.style.display = 'flex';
ui.style.flexDirection = 'column';
ui.style.justifyContent = 'center';
ui.style.alignItems = 'center';

ui.style.width= '600px';
ui.style.height= '600px';
ui.style.backgroundColor = 'transparent'
ui.style.gap = '5px';
const buttons = document.createElement('div');
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-evenly';
buttons.style.alignItems = 'center';
buttons.style.backgroundColor = 'lightgrey'
buttons.style.width= '500px';
buttons.style.height= '250px';
buttons.style.borderRadius= '50px'
buttons.style.border = '7px solid black'
buttons.style.boxShadow = '20px 15px 8px grey';
buttons.style.backgroundImage= 'url(rock-paper-scissors.gif)';
buttons.style.backgroundSize= '500px 250px';


const scoreTittle = document.createElement('div');
scoreTittle.style.display = 'flex';
scoreTittle.style.paddingTop = '10px'
scoreTittle.style.width= '400px';
scoreTittle.style.height= '150px';
scoreTittle.style.justifyContent = 'center';
scoreTittle.style.alignItems = 'flex-end'
const scoreText = document.createElement('p');
scoreText.textContent = 'Score'
scoreText.style.fontSize = '30px';
scoreText.style.color = 'black';
scoreText.style.fontWeight = 'bold';
scoreText.style.margin= '0px';
scoreText.style.textShadow = '2px 2px grey';
scoreText.style.fontFamily = 'Aclonica';
scoreText.style.textAlign = 'center';



const board = document.createElement('div');
board.style.width= '400px';
board.style.height= '200px';
board.style.backgroundColor = 'lightblue'
board.style.borderRadius= '50px'
board.style.border = '5px solid black'
board.style.boxShadow = '11px 10px 5px grey';
board.style.display = 'flex'
board.style.flexDirection = 'column';
board.style.alignItems = 'center'
board.style.justifyContent = 'center';

const scoreLine = document.createElement('p');
scoreLine.style.fontFamily = 'Aclonica';
scoreLine.style.color = 'blue';
scoreLine.style.margin = '0px';
scoreLine.style.whiteSpace = 'pre-wrap';
scoreLine.style.textAlign = 'center';


const rock = document.createElement('button');
rock.textContent= 'Rock';
rock.style.fontFamily = 'Aclonica';
rock.style.width='100px';
rock.style.height='50px';
rock.style.boxShadow = '8px 10px 5px grey';
rock.style.backgroundColor= '#87CEFA'
rock.style.borderRadius= '50px'
rock.addEventListener('click', function(e){    
    playerSelection='rock';
    board.style.background =  'lightblue';
    scoreText.textContent = 'Score';
    console.log(playerSelection);
    playRound(); 
    scoreLine.textContent = result;
    if (playerScore===5) {
        scoreText.textContent = `The winner is ${playerName}!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-happy.gif)';
        board.style.backgroundSize = '400px 190px';
        board.style.backgroundRepeat = 'no-repeat';
    }    
    else if (computerScore===5) {
        scoreText.textContent = `The winner is the computer!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-sad.gif)';
        board.style.backgroundSize = '400px 190px';
        board.style.backgroundRepeat = 'no-repeat';
    }
    
}) ;

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.style.width='100px';
paper.style.fontFamily = 'Aclonica';
paper.style.height='50px';
paper.style.backgroundColor= '#87CEFA'
paper.style.boxShadow = '8px 10px 5px grey';
paper.style.borderRadius= '50px'
paper.addEventListener('click', function(e){    
    playerSelection='paper';
    board.style.background =  'lightblue';
    scoreText.textContent = 'Score';
    console.log(playerSelection);
    playRound();
    scoreLine.textContent = result;  
    if (playerScore===5) {
        scoreText.textContent = `The winner is ${playerName}!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-happy.gif)';
        board.style.backgroundSize = '400px 190px';
        board.style.backgroundRepeat = 'no-repeat';
    }    
    else if (computerScore===5) {
        scoreText.textContent = `The winner is the computer!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-sad.gif)';
        board.style.backgroundSize = '400px 190px';
        board.style.backgroundRepeat = 'no-repeat';
    }
    
}) ; 

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.style.width='100px';
scissors.style.fontFamily = 'Aclonica';
scissors.style.height='50px';
scissors.style.boxShadow = '8px 10px 5px grey';
scissors.style.backgroundColor= '#87CEFA'
scissors.style.borderRadius= '50px'
scissors.addEventListener('click', function(e){   
    board.style.background =  'lightblue';
    scoreText.textContent = 'Score';
    playerSelection='scissors';
    console.log(playerSelection);
    playRound();   
    scoreLine.textContent = result;
    if (playerScore===5) {
        scoreText.textContent = `The winner is ${playerName}!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-happy.gif)';
        board.style.backgroundSize = '400px 190px';
        board.style.backgroundRepeat = 'no-repeat';
    }
    else if (computerScore===5) {
        scoreText.textContent = `The winner is the computer!`;
        scoreLine.textContent = ' ';
        playerScore = 0;
        computerScore = 0;
        draw = 0;
        board.style.backgroundImage= 'url(goku-sad.gif)';
        board.style.backgroundSize = '400px 190px';;
        board.style.backgroundRepeat = 'no-repeat';
    }    
}) ;

body.appendChild(container);
container.appendChild(ui);
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);
ui.appendChild(buttons);
ui.appendChild(scoreTittle);
scoreTittle.appendChild(scoreText);
ui.appendChild(board);
board.appendChild(scoreLine);
