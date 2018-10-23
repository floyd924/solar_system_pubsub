const Planets = require('../data/planets.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets', this.planets);
};

module.exports = SolarSystem;
