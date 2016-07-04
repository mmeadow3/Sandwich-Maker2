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

