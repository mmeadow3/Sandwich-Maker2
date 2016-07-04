(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const $ = jQuery;

const SandwichMaker = require('./maker');


console.log("bread:", SandwichMaker.breadPrice.breadPrices.wheat); ///////returns value for wheat Bread//////

console.log("price:", SandwichMaker.totalPrice); /////working for totalprice
},{"./maker":4}],2:[function(require,module,exports){
"use strict";

let Bread = {
	
	breadPrices: {
		wheat: 1.00,
		sourdough: 2.50,
		flatbread: 2.00,
		white: 1.00
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
		cheddar: 1.00,
		american: 2.50,
		extra: 2.00,
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
	breadPrice: Bread,
	totalPrice: 0,
	addTopping: function (toppingPrice){
		return Maker.totalPrice += toppingPrice;
	},
	total: function () {
		return Maker.totalPrice;
	}
};










module.exports = Maker; 
},{"./bread":2,"./cheese":3,"./meat":5,"./veggies":6}],5:[function(require,module,exports){
"use strict";

let Meat = {
	
	meatPrices: {
		bacon: 1.00,
		cheeseburger: 2.50,
		filet: 2.00,
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
		pickles: 1.00,
		fancy_ketchup: 2.50,
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
