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

