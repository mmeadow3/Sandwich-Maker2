"use strict";

const $ = jQuery;


const SandwichMaker = require('./maker');

var selectedTopping ;
var finalToppings = "";


// console.log("bread:", SandwichMaker.breadPrice.breadPrices.wheat); ///////returns value for wheat Bread//////

console.log("price:", SandwichMaker.totalPrice); /////working for totalprice



$( "#meat-chooser input" ).change(function() {
let selectedTopping = ($('input[name=radio1]:checked', '#meat-chooser').val()); ///////gives value from radio button
let chosenTopping = SandwichMaker.addTopping(meatPrice)
console.log(selectedTopping);
console.log(chosenTopping);

// finalSandwichPrice += chosenTopping;
// finalToppings += selectedTopping + ", ";
});

$( "#cheese-chooser" ).change(function() {
  console.log( "Handler for .change() called." );
});

$( "#bread-chooser" ).change(function() {
  console.log( "Handler for .change() called." );
});

$( "#condo-chooser" ).change(function() {
  console.log( "Handler for .change() called." );
});