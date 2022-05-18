const boxes = Array.from(document.getElementsByClassName("box"));
const startOver = document.getElementById("startOver");
const playText = document.getElementById("playText");
const board = document.getElementById("board");
//create an array of empty spaces 
const spaces = 
[ null, null, null,
  null, null, null,
  null, null, null ]
// create and x and o string 
const o = "$";
const x = "x";

// create a player to start of the board with(o)
let currentPlayer = o ;


const drawBoard = () => {
boxes.forEach((box, index) => {

let styleString = "";
// create a grid with 9 cells with equal length and width 
if (index< 3) {
styleString += `border-bottom: 3px solid var(--black);`;}
if (index% 3 ===0){
styleString += `border-right: 3px solid var(--black);`;}
if (index % 3 === 2) {
styleString+= `border-left: 3px solid var(--black);`;}
if (index > 5){
styleString += `border-top: 3px solid var(--black);`;}
box.style =styleString;
box.addEventListener("click", boxClicked);
  });
};

function boxClicked(i){
// create a winning player 
const id= i.target.id;
if (!spaces[id]){
spaces[id] =currentPlayer;
i.target.innerText = currentPlayer;
if (winningPlayer(currentPlayer)){
playText.innerHTML =`${currentPlayer} wins!!`;
return;
  
    } 
  // if currentPlayer is o the next player played should be x 
currentPlayer = currentPlayer === o ? x : o;
  }
 } 

 const winningPlayer =(player) =>{
//create winning senarios and if it wins store player who won in h1 element
if (spaces[0] ===player) {
if(spaces[1] === player && spaces[2] ===player) {
console.log(`${player} wins up top`);
return true;
}
if (spaces[3]=== player && spaces[6]=== player) {
console.log(`${player} wins on the left`);
return true;
}
if (spaces[4] ===player && spaces[8] === player) {
console.log(`${player} wins on the diagonal`);
return true;
}
  }
if (spaces[8] === player) {
if (spaces[2]=== player && spaces[5] === player) {
console.log(`${player} wins on the right`);
return true;
    }
if(spaces[7] === player && spaces[6] ===player) {
console.log(`${player} wins on the bottom`);
return true;}
  }
 if (spaces[4] === player) {
if (spaces[3] === player && spaces[5] === player) {
console.log(`${player} wins on the middle horizontal`);
return true;}
if (spaces[1] === player && spaces[7] === player){
console.log(`${player} wins on the middle vertical`);
return true;}
  } 
  };
  

//create start over button to reset the game 
startOver.addEventListener("click", () => {
spaces.forEach((space, index) => {
spaces[index] = null;});
boxes.forEach((box) => {
box.innerText = "";}); 
currentPlayer = o;});

drawBoard();
