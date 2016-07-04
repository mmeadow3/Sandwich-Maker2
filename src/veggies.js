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

