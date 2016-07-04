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

