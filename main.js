
const items = ["Rock", "Paper", "Scissors"];

// computer automatically select randomly from items
function computerPlay(){
    return items[Math.floor(Math.random()*items.length)]
};

//participants
const playerSelection = window.prompt("enter one item", items);
playerSelection.toLowerCase();
const computerSelection = computerPlay(items);
const score = 0;

//play game
function playRound(playerSelection, computerSelection){
    if(playerSelection !== computerSelection){
        return `You Lose ! ${playerSelection} beats ${computerSelection}`
    } else{
        return "Congrats, You Win!" 
    }
}

//play the game 5 times(loop)
         
function game(playRound){
    for(let i=5; i>items.length; i--){
       const score;
                
    }
}

                
 //   console.log(game(Playround)); 

     
