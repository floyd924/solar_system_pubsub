const Planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

console.log(SolarSystem);

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets', this.planets);

  PubSub.subscribe('SelectView:click', (event) => {
    const selectedIndex = event.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};
console.log("Solar System at line 9");

SolarSystem.prototype.publishPlanetDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet);
};

console.log("List of planets");

module.exports = SolarSystem;
