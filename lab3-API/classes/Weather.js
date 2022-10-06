import Clothing from './Clothing.js';

export default class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        this.getLocation();
        //console.log(`App is loaded with API_KEY: ${this.API_KEY}`);
        this.weather = "";
    }

    getLocation() {
        //console.log('Getting location...');
        navigator.geolocation.getCurrentPosition(
            this.locationSucces.bind(this),
            this.locationError.bind(this)
        );
    }
    
    locationSucces(loc) {
        //console.log(loc);
        this.lat = loc.coords.latitude;
        this.lng = loc.coords.longitude;
        this.getWeather();
    }

    locationError(err) {
        console.error(err);
    }

    getWeather() {
        const url = `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${this.lat},${this.lng}&aqi=no`;

        // check if location exists in local storage
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('weatherTime') < 1000 * 60 * 60) {
            // get weather from local storage
            const w = JSON.parse(localStorage.getItem('weather'));
            this.displayWeather(w);
        } else {
            // get weather from API
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // store weather in local storage
                    localStorage.setItem('weather', JSON.stringify(data));
                    this.displayWeather(data);
                });
        }
    }

    displayWeather(data) {
        const title = document.querySelector('.weather__condition');
        const icon = document.querySelector('.weather__icon');

        title.innerHTML = data.current.condition.text;
        icon.src = data.current.condition.icon;

        this.weather = data.current.condition.text;
        console.log("Display weather function " + this.weather);

        this.getClothes(this.weather);
    }

    getClothes(weather) {
        const wearables = new Clothing('446a5cb6f1mshe3be4fa8b0625e4p1ad412jsnca2e20050552', weather);
        console.log("Get Clothes function inside Weather class: " + weather);
    }

}