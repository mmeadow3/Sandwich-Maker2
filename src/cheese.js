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


