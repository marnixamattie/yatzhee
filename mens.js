function clickButton(){
var nameInput = document.getElementById("name").value;
console.log(nameInput);
document.getElementById('people').innerHTML += `<img class="person" id="namen" name="${nameInput}" src="mand.jpg" onclick="personName('${nameInput}')"></img>`

}

function personName(naam){
  console.log(naam);
}   