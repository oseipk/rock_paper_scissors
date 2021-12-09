
const items = ["Rock", "Paper", "Scissors"];

// computer automatically select randomly from items


function computerPlay(){
    return items[Math.floor(Math.random()*items.length)]
}; 
const playerSelection = prompt("enter one item", items);
playerSelection.toLowerCase();
const computerSelection = computerPlay();

//play game
function playRound(playerSelection, computerSelection){
    if(playerSelection !== computerSelection){
        return "You Lose !" ${playerSelection} beats ${computerSelection}
    }else {
        return "it's a tie"

         
function game(){
    for(let i=5; i>items.length; i--){
        if(playerSelection===computerSelection){
            score1==0;
        }else{
            score2 ==1;
        }
        const score = score1 + score 2;
        
    }
}

                
 //   console.log(playRound(playerSelection,computerSelection)); 

     
