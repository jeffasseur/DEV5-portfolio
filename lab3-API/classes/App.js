export default class App {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        this.radius = 50;
        this.getLocation();
        console.log(`App is loaded with API_KEY: ${this.API_KEY}`);
    }

    getLocation() {
        console.log('Getting location...');
        navigator.geolocation.getCurrentPosition(
            this.locationSucces.bind(this),
            this.locationError.bind(this)
        );
    }

    locationSucces(loc) {
        console.log(loc);
        this.lat = loc.coords.latitude;
        this.lng = loc.coords.longitude;
        this.getCities();
    }

    locationError(err) {
        console.error(err);
    }

    getCities() {
        //console.log('🏬');
        let urlCities = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${this.lat}-${this.lng}/nearbyCities?radius=${this.radius}`;
        this.radius = document.querySelector('#myRange').value;
        console.log(this.radius);
    }
}