//getting choice of computer based on random number
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
   switch(x){
    case 0:
        computerSelection = "rock";
        break;
    case 1:
        computerSelection = "paper";
        break;
    case 2:
        computerSelection = "scissors";
   }
    return computerSelection;
}

//playing one round of the game
function game(){
    getComputerChoice();
    let playerSelection=prompt("choose between rock, paper and scissors:");
    if(playerSelection == computerSelection){
        result = "It's a tie!";
    }
    else if(playerSelection == "rock"){
        switch(computerSelection){
            case "paper":
                result = "You lose! Paper beats rock";
                break;
            case "scissors":
                result = "You win! Rock beats scissors";
                break;
        }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                result = "You win! Paper beats rock";
                break;
            case "scissors":
                result = "You lose! Scissors beats paper";
                break;
        }
    }
    else if(playerSelection == "scissors"){
        switch(computerSelection){
            case "paper":
                result = "You win! Scissors beats paper";
                break;
            case "rock":
                result = "You lose! Rock beats scissors";
                break;
        }
    }
    return result;
}


let playerScore=0;
let computerScore=0;
function playGame(){
    for(let i = 0; i<5; i++){
        game();
        if(result ==  "You lose! Paper beats rock" && 
            result == "You lose! Scissors beats paper" && 
            result == "You lose! Rock beats scissors"){
            computerScore = computerScore +1;
        }
        else if (result = "It's a tie!") {
            playerScore = playerScore +1;
            computerScore = computerScore +1;
        } 
        else {
            playerScore = playerScore +1;
        }
    }
    if(computerScore > playerScore){
        return "you lose!";
    }
    else{
        return "you win!"
    }
}
alert(playGame());