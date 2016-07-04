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