var diceRolls = 3;
var currentPlayer = 1;
let hold = false;
let dielock1 = false;
let dielock2 = false;
let dielock3 = false;
let dielock4 = false;
let dielock5 = false;
let calculateScore = 0;

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;


function calculate(number){
 switch(number){
    case 1:
    alert("selected ones");
    break;
    case 2:
    alert("selected twos");
    break;
    case 3:
    alert("selected threes");
    break;
    case 4:
    alert("selected fours");
    break;
    case 5:
    alert("selected fives");
    break;
    case 6:
    alert("selected sixes");
    break;
    case 7:
    alert("subtotal");
    break;
    case 8:
    alert("bonus");
    break;
    case 9:
    alert("total");
    break;
    case 10:
    alert("selected three of a kind");
    break;
    case 11:
    alert("selected four of a kind");
    break;
    case 12:
    alert("selected full house");
    break;
    case 13:
    alert("selected small straight");
    break;
    case 14:
    alert("selected large straight");
    break;
    case 15:
    alert("selected yatzhee");
    break;
    case 16:
    alert("selected chance");
    break;
    case 17:
    alert("total");
    break;
    case 18:
    alert("grand total");
    break;
 }
}

function roll(){
   if(hold = true){
//zorgt dat je maar 3 keer kan rollen
   }
   if(diceRolls > 0){
      diceRolls--;
//random dice rolls
      document.getElementById("rollsLeft").textContent = `rolls left: ${diceRolls}`;
      var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
     if(!dielock1){
         document.getElementById("dice1").src = dice[Math.floor(Math.random() * dice.length)];
         one = getValue(dice1);
         document.getElementById("ones").textContent = parseInt(one);
      }if(!dielock2){
         document.getElementById("dice2").src = dice[Math.floor(Math.random() * dice.length)];
         two = getValue(dice2);
         document.getElementById("twos").textContent = parseInt(two);
      }if(!dielock3){
         document.getElementById("dice3").src = dice[Math.floor(Math.random() * dice.length)];
         three = getValue(dice3);
          document.getElementById("threes").textContent = parseInt(three);
      }if(!dielock4){
         document.getElementById("dice4").src = dice[Math.floor(Math.random() * dice.length)];
         four = getValue(dice4);
          document.getElementById("fours").textContent = parseInt(four);
      }if(!dielock5){
         document.getElementById("dice5").src = dice[Math.floor(Math.random() * dice.length)];
         five = getValue(dice5);
          document.getElementById("fives").textContent = parseInt(five);
      }
   }else{
   alert("You have no more rolls left");
}
//zelfde als reset
reset();
}
// om dice te stoppen met rollen
// if(diceRolls == 3){
//   alert("Klaar om spel te starten? Klik op de knop om te starten.");
// }
function stopDice(diceNumber){
   console.log(`Dice ${diceNumber} stopped rolling`);
   if(diceNumber == 1){
      dielock1 = true;
      document.getElementById("dice1").style.border = "2px solid red";
   }
   if(diceNumber == 2 ){
      dielock2 = true;
      document.getElementById("dice2").style.border = "2px solid red";
   }
   if(diceNumber == 3 ){
      dielock3 = true;
      document.getElementById("dice3").style.border = "2px solid red";
   }
   if(diceNumber == 4){
      dielock4 = true;
      document.getElementById("dice4").style.border = "2px solid red";
   }
   if(diceNumber == 5){
      dielock5 = true;
      document.getElementById("dice5").style.border = "2px solid red";
   }
   if(diceRolls == 3){
      dielock1 = false;
      document.getElementById("dice1").style.border = "";
   }
   if(diceRolls == 3){
      dielock2 = false;
      document.getElementById("dice2").style.border = "";
   }
   if(diceRolls == 3){
      dielock3 = false;
      document.getElementById("dice3").style.border = "";
   }
   if(diceRolls == 3){
      dielock4 = false;
      document.getElementById("dice4").style.border = "";
   }
   if(diceRolls == 3){
      dielock5 = false;
      document.getElementById("dice5").style.border = "";
   }

}
//reset knop
function reset(){
   dielock1 = false;
   dielock2 = false;
   dielock3 = false;
   dielock4 = false;
   dielock5 = false;
   document.getElementById("dice1").style.border = "";
   document.getElementById("dice2").style.border = "";
   document.getElementById("dice3").style.border = "";
   document.getElementById("dice4").style.border = "";
   document.getElementById("dice5").style.border = "";
}
//om de waarde van de dobbelsteen te krijgen
function getValue(dieId){
   let number = 0;
   if(dieId.src.includes("dice1.png")){
      number = 1;
   }
   if(dieId.src.includes("dice2.png")){
      number = 2;
   }
   if(dieId.src.includes("dice3.png")){
      number = 3;
   }
   if(dieId.src.includes("dice4.png")){
      number = 4;
   }
   if(dieId.src.includes("dice5.png")){
      number = 5;
   }
   if(dieId.src.includes("dice6.png")){
      number = 6;
   }
   return number;
}