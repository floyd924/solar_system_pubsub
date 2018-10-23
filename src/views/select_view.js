const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:all-planets', (event) =>{
    const allPlanets = event.detail;
    this.populate(allPlanets);
    console.log("Select View at line 11");
  });

  this.element.addEventListener('click', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:click', selectedIndex);
  });
};

SelectView.prototype.populate = function (solarSystemData) {
  solarSystemData.forEach( (planet, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = planet.name;
    listItem.value = index;
    this.element.appendChild(listItem)
  });
};


module.exports = SelectView;
