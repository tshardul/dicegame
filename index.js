
var count1 = 0;
var count2 = 0;
var drawCount = 0;

document.querySelector(".btn").onclick = function rollIt(){
  whoWon = diceroll();

if (whoWon === 1){
  count1 += 1;
}else if (whoWon === 2){
  count2 += 1
}else{
  drawCount += 1;
}

document.querySelector("#p1wincount").innerHTML = "Player 1 win count:  " +count1;
document.querySelector("#p2wincount").innerHTML = "Player 2 win count:  " +count2;
document.querySelector("#drawcount").innerHTML = "Draws:"+drawCount;

document.querySelector(".endbtn").onclick = function endIt(){
if (document.querySelector(".endbtn").innerHTML === "End game") {
  document.querySelector(".endbtn").innerHTML = "Restart";
}else {
  document.querySelector(".endbtn").innerHTML = "End game";
}
  if (count1 > count2){
    if (document.querySelector("h1").textContent = "Roll the Dice!") {
      document.querySelector("h1").textContent = "Player 1 wins!";
    }else {
      document.querySelector("h1").textContent = "Roll the Dice!";
    }

    document.querySelector(".final-count").innerHTML= "Player 1 wins with "+count1+" <br> rolls over Player 2's " +count2+ " rolls.";
  }else if (count2 >count1) {
    if (document.querySelector("h1").textContent = "Roll the Dice!") {
      document.querySelector("h1").textContent = "Player 2 wins!";
    }else {
      document.querySelector("h1").textContent = "Roll the Dice!";
    }
    document.querySelector("#winner").innerHTML = "Winner: Player 2";
    document.querySelector(".final-count").innerHTML= "Player 2 wins with "+count2+" <br> rolls over Player 1's " +count1+ " rolls.";
  }else{ if (count1 != 0) {
    document.querySelector("h1").textContent="Its a Draw!";
    document.querySelector("#winner").innerHTML = "Draw!";
    document.querySelector(".final-count").innerHTML= "Its a draw! <br> Both players won " +count1+" rolls.";
  }else {

    document.querySelector("h1").textContent="Roll the Dice!";
    document.querySelector("#winner").innerHTML = "Draw!";
    document.querySelector(".final-count").innerHTML= "Its a draw! <br> Both players won " +count1+" rolls.";
  }
}
// if (document.querySelector("h1").textContent === "Player 2 wins!") {
//   document.querySelector("h1").textContent = "Roll the Dice!";
// } else if(document.querySelector("h1").textContent === "Player 1 wins!") {
//   document.querySelector("h1").textContent = "Roll the Dice!";
// }
  count1 = 0;
  count2 = 0;
  drawCount = 0;
  document.querySelector("#winner").classList.toggle("hidden-completely");
  document.querySelector(".btn").classList.toggle("hidden-completely");

  document.querySelector(".img1").setAttribute("src","images/dice6.png");
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  document.querySelector(".final-count").classList.toggle("hidden");
  document.querySelector("#p1wincount").classList.toggle("hidden-completely");
  document.querySelector("#p2wincount").classList.toggle("hidden-completely");
  document.querySelector("#drawcount").classList.toggle("hidden-completely");
  document.querySelector("#p1wincount").innerHTML = "Player 1 wincount:  " +count1;
  document.querySelector("#p2wincount").innerHTML = "Player 2 wincount:  "+count2;
  document.querySelector("#drawcount").innerHTML = "Draws:"+drawCount;


}
}


function diceroll(){

var randomNumber1= Math.floor(((Math.random()*6)+1));
var randomNumber2= Math.floor(((Math.random()*6)+1));
var winner = 0;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
  document.querySelector("#winner").innerHTML = "Winner: Player 1";

  winner=1;
}else if(randomNumber1<randomNumber2){
  document.querySelector("#winner").innerHTML = "Winner: Player 2";
  winner = 2;
}else {
  document.querySelector("#winner").innerHTML = "Draw";
}
return winner;

}
