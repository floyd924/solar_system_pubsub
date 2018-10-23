const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('nav.planets-menu');
  const planetsMenu = new SelectView(selectElement);
  planetsMenu.bindEvents();

  const planetDataSource = new SolarSystem();
  planetDataSource.bindEvents();

  console.log("app.js has got to line 9");
});
