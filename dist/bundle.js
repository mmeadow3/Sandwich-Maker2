(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./maker":4}],2:[function(require,module,exports){
"use strict";

let Bread = {
	
	breadPrices: {
		wheat: 1.50,
		sourdough: 2.50,
		flatbread: 2.00,
		white: 0.99
		},

addBread: function (bread){
	return Bread.breadPrices[bread];
}
}; 





module.exports = Bread; 
},{}],3:[function(require,module,exports){
"use strict";

let Cheese = {
	
	cheesePrices: {
		cheddar: 1.50,
		american: 0.99,
		Swiss: 2.00,
		none: 0.00
		},

addCheese: function (cheese){
	return Cheese.cheesePrices[cheese];
}
}; 





module.exports = Cheese; 



},{}],4:[function(require,module,exports){
"use strict";

const Bread = require('./bread');
const Cheese = require('./cheese');
const Meat = require('./meat');
const Veggies = require('./veggies');



let Maker = {
  totalPrice: 0,
  addTopping: function(toppingPrice) {
    Maker.totalPrice += toppingPrice;
  },
  getTotal: function() {
    return Maker.totalPrice;
  }
};

module.exports = Maker;

},{"./bread":2,"./cheese":3,"./meat":5,"./veggies":6}],5:[function(require,module,exports){
"use strict";

let Meat = {
	
	meatPrices: {
		turkey: 1.00,
		salami: 2.50,
		bacon: 2.00,
		none: 0.00
		},

addMeat: function (meat){
	return Meat.meatPrices[meat];
}
}; 





module.exports = Meat; 


},{}],6:[function(require,module,exports){
"use strict";

let Veggies = {
	
	veggiePrices: {
		pickles: 1.50,
		mustard: 0.99,
		tomatoes: 2.00,
		none: 0.00
		},

addVeggies: function (veggies){
	return Veggies.veggiePrices[veggies];
}
}; 





module.exports = Veggies; 


},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
