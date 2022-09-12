// var 1 pet_preferito = 'gatto';
// console.log(1 pet_preferito);
// in questo caso var 1 pet_preferito = 'gatto' non va bene, la console reinderizza come Uncaught error in quanto stiamo utilizzando un number (1)

// alert('Usa il pop up per dare dei messaggi');


var pet = 'gatto';
console.log(pet);
var Pet = 'cane';
console.log(Pet);
var petPreferito = 'criceto';
console.log(petPreferito);
var PetPreferito = 'coniglio';
console.log(PetPreferito);

// window.alert('Sto studiando JS');


var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
document.write(_pet2);

// alert('Vado a definire altri elementi');

document.getElementById("animali");
document.getElementById("animali").innerHTML = "Zoo";
// facendo così mi è andato a sovrascrivere il <p> che nell'HTML è all'interno del div con id="animali"
document.getElementById("animali").style.color = "blue";
// in questo modo vado a cambiare il colore a quello che c'è all'interno del div con id="animali"

// var 12 = 'numero';

var firstNumber = Number(prompt("Inserisci il tuo primo numero"))
var secondNumber = Number(prompt("Inserisci il tuo secondo numero"))
document.write(firstNumber + secondNumber);