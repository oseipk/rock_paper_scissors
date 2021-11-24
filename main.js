
const items = ["Rock", "Paper", "Scissors"];

// computer automatically select randomly from items
function computerPlay(){
    return items[Math.floor(Math.random()*items.length)];
}


const playerSelection = prompt("enter one item", items);
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie!"
    }
    else{
        return `${playerSelection} beats ${computerSelection} and wins the game`
         }
}
                
    console.log(playRound(playerSelection,computerSelection)); 

     
