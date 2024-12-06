let rpsClicked = undefined; //current clicked figure state
const rps = ["rock","paper","scissors"];
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissors");
let picholder = document.getElementById("picholder");
let handcomp = document.getElementById("handcomp");
let game = document.getElementById("game");
let yes = document.getElementById("YES");
rockButton.addEventListener("click", ()=>playRound(0));
paperButton.addEventListener("click", ()=>playRound(1));
scissorButton.addEventListener("click", ()=>playRound(2));
yes.addEventListener("click", ()=>playGame());
let gameStatus = document.getElementById("status");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function playRound(player){
    computer = Math.floor(Math.random()*3);
    console.log(rps[computer]);
    winner=calculateWinner(computer,player);
    console.log(winner);
    hideInterface();
    handcomp.src="think.gif";
    gameStatus.innerHTML = "YOU CHOOSE " +rps[player]+ " COMPUTER IS THINKY";
    sleep(1500).then(() => { 

        if (winner==="LOSE"){
            handcomp.src="fingerwave.gif";
            gameStatus.innerHTML = "COMPUTER CHOOSES " +rps[computer]+ " YOU LOSE";
        }
        else if (winner==="WIN"){
            handcomp.src="explosion.gif"
            gameStatus.innerHTML = "COMPUTER CHOOSES " +rps[computer]+ " YOU WIN";
        }
        else {
            handcomp.src="draw.gif";
            gameStatus.innerHTML = "COMPUTER CHOOSES " +rps[computer]+ " ITS A DRAW";
        }
    });
    
}
function getPlayerChoice(x){
    console.log(x);
    rpsClicked = x;
}
function getComputerChoice(){
    
}
function calculateWinner(computer, player){
    if ((computer === player)){
        return "DRAW";
    }
    else if ((computer === 0 && player === 1) ||
             (computer === 1 && player === 2) ||
             (computer === 2 && player === 0)) {
        return "WIN";
    }
    else return "LOSE";
}
function hideInterface(){
    picholder.style.display="none";
}
function playGame(){
    game.style.display="flex";
    document.getElementById("title").style.display="none";
}


