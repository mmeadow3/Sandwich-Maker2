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