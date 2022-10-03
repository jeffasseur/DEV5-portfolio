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

        fetch(urlCities, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '446a5cb6f1mshe3be4fa8b0625e4p1ad412jsnca2e20050552',
		        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err);
        });
    }
}