"use strict";

const $ = jQuery;

const SandwichMaker = require('./maker');


// console.log("bread:", SandwichMaker.breadPrice.breadPrices.wheat); ///////returns value for wheat Bread//////

console.log("price:", SandwichMaker.totalPrice); /////working for totalprice

$( "#meat-chooser" ).change(function() {
  console.log( "Handler for .change() called." );
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