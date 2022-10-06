import Weather from './classes/Weather.js';
import Clothing from './classes/Clothing.js';
import './style.css'

const App = new Weather('dcd54b8118d14a0396863452220510');
//const wearables = new Clothing('446a5cb6f1mshe3be4fa8b0625e4p1ad412jsnca2e20050552', App.weather);

const w = App.weather;
console.log(w);

//wearables.getWearables(w);