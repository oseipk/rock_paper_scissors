const items = ["Rock", "Paper", "Scissors"];
function computerPlay(){
    return items[Math.floor(Math.random()*items.length)];
}
// console.log(computerPlay(items))