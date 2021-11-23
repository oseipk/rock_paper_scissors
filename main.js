const items = ["Rock", "Paper", "Scissors", "Mango", "Juice"];
function computerPlay(){
    return items[Math.floor(Math.random()*items.length)];
}
// console.log(computerPlay(items))

const playerSelection = prompt("enter one item", items);
 const computerSelection = computerPlay();

function playOn(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie!"
    }
    else{
        return `${playerSelection} beats ${computerSelection} and wins the game`
                }
}
                
    console.log(playOn(playerSelection,computerSelection)); 

    
