"use strict";

let Bread = {
	
	breadPrices: {
		wheat: 1.00,
		sourdough: 2.00,
		flatbread: 2.00,
		white: 1.00
		},

addBread: function (bread){
	return Bread.breadPrices[bread];
}
}; 





module.exports = Bread; 