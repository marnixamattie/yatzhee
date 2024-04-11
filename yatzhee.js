var diceRolls = 3;
var currentPlayer = 1;
let hold = false;
let dielock1 = false;
let dielock2 = false;
let dielock3 = false;
let dielock4 = false;
let dielock5 = false;
let calculateScore = 0;

let countsAndSums = {
   one: {count: 0, sum: 0},
   two: {count: 0, sum: 0},
   three: {count: 0, sum: 0},
   four: {count: 0, sum: 0},
   five: {count: 0, sum: 0},
   six: {count: 0, sum: 0}
};

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;

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

function calculate(number){
   var element = document.getElementById(number);
   var element2 = document.getElementById(`${number}l`);

   // Check if the element has already been clicked
   if(element.clicked) {
       alert("Leuk ge probeerd maar dat kan niet meer!");
       return;
   }

   // Mark the element as clicked
   element.clicked = true;

   // Array of possible values
   var possibleValues = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'tok', 'fok', 'fh', 'ss', 'ls', 'chance', 'yatzhee'];

   possibleValues.forEach(value => {
       if(number === value) {
           element2.textContent = element.textContent;

           element.style.background = "rgb(0,0,0,0.6)";
       }
   });
   roll();
}

function calculateTotal(){
let ones = document.getElementById("onesl")?.textContent;
let twos = document.getElementById("twosl")?.textContent;
let threes = document.getElementById("threesl")?.textContent;
let fours = document.getElementById("foursl")?.textContent;
let fives = document.getElementById("fivesl")?.textContent;
let sixes = document.getElementById("sixesl")?.textContent;
let threeOfAkind = document.getElementById("tokl").textContent;
let fourOfAkind = document.getElementById("fokl").textContent;
let fullHouse = document.getElementById("fhl").textContent;
let smallStraight = document.getElementById("ssl").textContent;
let largeStraight = document.getElementById("lsl").textContent;
let chance = document.getElementById("chancel").textContent;
let yatzhee = document.getElementById("yatzheel").textContent;

let volTotal = document.getElementById("voltotal").textContent = parseInt(threeOfAkind) + parseInt(fourOfAkind) + parseInt(fullHouse) + parseInt(smallStraight) + parseInt(largeStraight) + parseInt(chance) + parseInt(yatzhee);



let total = parseInt(ones) + parseInt(twos) + parseInt(threes) + parseInt(fours) + parseInt(fives) + parseInt(sixes);

document.getElementById("totaal").textContent = total;
if(total >= 63){
document.getElementById("grandTotal").textContent = volTotal + total + 35;
}else(
document.getElementById("grandTotal").textContent = volTotal + total
)

document.getElementById("last").textContent = total;
if(total >= 63){
   document.getElementById("bonuss").textContent = 35;
   document.getElementById("totaal").textContent = total + 35;
}else{
   document.getElementById("totaal").textContent = total;

}
}

function threeOfAKind(){
   if(countsAndSums.one.count >= 3 || countsAndSums.two.count >= 3 || countsAndSums.three.count >= 3 || countsAndSums.four.count >= 3 || countsAndSums.five.count >= 3 || countsAndSums.six.count >= 3){
   let threeOfAkind = document.getElementById('tok').textContent = (one + two + three + four + five);
   }
}

function fourOfAKind(){
   if(countsAndSums.one.count >= 4 || countsAndSums.two.count >= 4 || countsAndSums.three.count >= 4 || countsAndSums.four.count >= 4 || countsAndSums.five.count >= 4 || countsAndSums.six.count >= 4){
   let fourOfAkind = document.getElementById("fok").textContent = (one + two + three + four + five);
   }
}

function fullHouse(){
   if((countsAndSums.one.count === 3 || countsAndSums.two.count === 3 || countsAndSums.three.count === 3 || countsAndSums.four.count === 3 || countsAndSums.five.count === 3 || countsAndSums.six.count === 3) && (countsAndSums.one.count === 2 || countsAndSums.two.count === 2 || countsAndSums.three.count === 2 || countsAndSums.four.count === 2 || countsAndSums.five.count === 2 || countsAndSums.six.count === 2)){
      document.getElementById("fh").textContent = 25;
   }
}

function smallStraight(){
   if((countsAndSums.one.count >= 1 && countsAndSums.two.count >= 1 && countsAndSums.three.count >= 1 && countsAndSums.four.count >= 1) || (countsAndSums.two.count >= 1 && countsAndSums.three.count >= 1 && countsAndSums.four.count >= 1 && countsAndSums.five.count >= 1) || (countsAndSums.three.count >= 1 && countsAndSums.four.count >= 1 && countsAndSums.five.count >= 1 && countsAndSums.six.count >= 1)){
      document.getElementById("ss").textContent = 30;
   }
}

function largeStraight(){
   if((countsAndSums.one.count === 1 && countsAndSums.two.count === 1 && countsAndSums.three.count === 1 && countsAndSums.four.count === 1 && countsAndSums.five.count === 1) || (countsAndSums.two.count === 1 && countsAndSums.three.count === 1 && countsAndSums.four.count === 1 && countsAndSums.five.count === 1 && countsAndSums.six.count === 1)){
      document.getElementById("ls").textContent = 40;
   }
}

function chance(){
   document.getElementById("chance").textContent = (one + two + three + four + five);
}

function yatzhee(){
   if(countsAndSums.one.count === 5 || countsAndSums.two.count === 5 || countsAndSums.three.count === 5 || countsAndSums.four.count === 5 || countsAndSums.five.count === 5 || countsAndSums.six.count === 5){
      document.getElementById("yatzhee").textContent = 50;
   }
}


function roll(){
   if(hold = true){
//zorgt dat je maar 3 keer kan rollen
   if(diceRolls > -999){
      diceRolls--;
//random dice rolls
      document.getElementById("rollsLeft").textContent = `rolls left: ${diceRolls}`;
      var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
     if(!dielock1){
         document.getElementById("dice1").src = dice[Math.floor(Math.random() * dice.length)];
      }if(!dielock2){
         document.getElementById("dice2").src = dice[Math.floor(Math.random() * dice.length)];
      }if(!dielock3){
         document.getElementById("dice3").src = dice[Math.floor(Math.random() * dice.length)];
      }if(!dielock4){
         document.getElementById("dice4").src = dice[Math.floor(Math.random() * dice.length)];
      }if(!dielock5){
         document.getElementById("dice5").src = dice[Math.floor(Math.random() * dice.length)];
      }
      one = getValue(dice1);

      two = getValue(dice2);

      three = getValue(dice3);

      four = getValue(dice4);

      five = getValue(dice5);

// Array of dice values
let diceValues = [one, two, three, four, five];
console.log(diceValues);

countsAndSums = {
   one: {count: 0, sum: 0},
   two: {count: 0, sum: 0},
   three: {count: 0, sum: 0},
   four: {count: 0, sum: 0},
   five: {count: 0, sum: 0},
   six: {count: 0, sum: 0}
};
diceValues.forEach(value => {
   switch(value) {
       case 1:
           countsAndSums.one.count++;
           countsAndSums.one.sum += value;
           break;
       case 2:
           countsAndSums.two.count++;
           countsAndSums.two.sum += value;
           break;
       case 3:
           countsAndSums.three.count++;
           countsAndSums.three.sum += value;
           break;
       case 4:
           countsAndSums.four.count++;
           countsAndSums.four.sum += value;
           break;
       case 5:
           countsAndSums.five.count++;
           countsAndSums.five.sum += value;
           break;
       case 6:
           countsAndSums.six.count++;
           countsAndSums.six.sum += value;
           break;
   }
});

   let sumOfOnes = countsAndSums.one.sum;
   console.log(`Totale waarde van de enen: ${sumOfOnes}`);
   document.getElementById("ones").textContent = sumOfOnes;
   let sumOfTwos = countsAndSums.two.sum;
   console.log(`Totale waarde van de tweeen: ${sumOfTwos}`);
   document.getElementById("twos").textContent = sumOfTwos;
   let sumOfThrees = countsAndSums.three.sum;
   console.log(`Totale waarde van de drieen: ${sumOfThrees}`);
   document.getElementById("threes").textContent = sumOfThrees;
   let sumOfFours = countsAndSums.four.sum;
   console.log(`Totale waarde van de vieren: ${sumOfFours}`);
   document.getElementById("fours").textContent = sumOfFours;
   let sumOfFives = countsAndSums.five.sum;
   console.log(`Totale waarde van de vijven: ${sumOfFives}`);
   document.getElementById("fives").textContent = sumOfFives;
   let sumOfSixes = countsAndSums.six.sum;
   console.log(`Totale waarde van de zessen: ${sumOfSixes}`);
   document.getElementById("sixes").textContent = sumOfSixes;

   calculateTotal();

   }else{
   alert("You have no more rolls left");
}
}
//zelfde als reset
reset();
threeOfAKind();
fourOfAKind();
fullHouse();
smallStraight();
largeStraight();
chance();
yatzhee();
}

function stopDice(diceNumber){

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