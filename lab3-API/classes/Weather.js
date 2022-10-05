export default class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        this.getLocation();
        //console.log(`App is loaded with API_KEY: ${this.API_KEY}`);
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

        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.displayWeather(data);
            });
    }

    displayWeather(data) {
        const title = document.querySelector('.weather__condition');
        const icon = document.querySelector('.weather__icon');

        title.innerHTML = data.current.condition.text;
        icon.src = data.current.condition.icon;
    }

}