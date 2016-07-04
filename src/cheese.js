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


