let rpsClicked = undefined; //current clicked figure state
const rps = ["rock","paper","scissors"];
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissors");
let picholder = document.getElementById("picholder");
let handcomp = document.getElementById("handcomp");
let game = document.getElementById("game");
let yes = document.getElementById("YES");
const wholeScreen = document.querySelector("body");
//rockButton.addEventListener("click", ()=>playRound(0));
//paperButton.addEventListener("click", ()=>playRound(1));
//scissorButton.addEventListener("click", ()=>playRound(2));
yes.addEventListener("click", ()=>playGame());
let gameStatus = document.getElementById("status");
let choice = document.getElementById("picholder");
const compCounter = document.getElementById("computerScore");
const playerCounter = document.getElementById("playerScore");
let compscore = 0;
let playerscore = 0;
let endgame = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
const again = document.getElementById("AGAIN");
//const explosion = document.createElement("a");
again.addEventListener('click', () => {
    if (endgame){
       
        endgame = 0;
        wholeScreen.style.backgroundImage = 'url("explosion.gif")';
        game.style.display = "none";
        sleep(700).then(() => {
            wholeScreen.style.backgroundImage = "none";
        });
        
    }
    else {
        again.style.display = "none";
        showInterface();
        gameStatus.textContent = "PICK YO SHIT YO"
    }
})
choice.addEventListener('click', (e) => {
    let target = e.target;
    console.log(e.target.id);
    playRound(rps.indexOf(e.target.id));

});

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
            compscore++;
        }
        else if (winner==="WIN"){
            handcomp.src="explosion.gif"
            gameStatus.innerHTML = "COMPUTER CHOOSES " +rps[computer]+ " YOU WIN";
            playerscore++;
        }
        else {
            handcomp.src="draw.gif";
            gameStatus.innerHTML = "COMPUTER CHOOSES " +rps[computer]+ " ITS A DRAW";
        }
        compCounter.textContent = "COMP: " + compscore;
        playerCounter.textContent = "P1: "+ playerscore;
        if (compscore == 5 || playerscore == 5){
            if (compscore>playerscore){
                endgame = 1;
                gameStatus.textContent = "COMPUTER WINS. SUCKER"
                again.textContent = "CLEAR CUM?"
            }
            else {
                gameStatus.textContent = "YOU WIN!!!! YEAAAAHHHHHHHH"
                endgame = 1;
                again.textContent = "CLEAR CUM?"
        }
    }
        again.style.display = "flex";
    });

}
function getPlayerChoice(x){
   // console.log(x);
    //rpsClicked = x;
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
function showInterface(){
    picholder.style.display="flex";
}
function playGame(){
    game.style.display="flex";
    document.getElementById("title").style.display="none";
}


