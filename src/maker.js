"use strict";

const Bread = require('./bread');
const Cheese = require('./cheese');
const Meat = require('./meat');
const Veggies = require('./veggies');



let Maker = {
  totalPrice: 0,
  addTopping: function(toppingPrice) {
    Maker.totalPrice += toppingPrice;
  },
  getTotal: function() {
    return Maker.totalPrice;
  }
};

module.exports = Maker;
