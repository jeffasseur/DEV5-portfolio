import Weather from './Weather.js';

export default class Clothing {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.country = 'us';
        this.lang = 'en';
        this.currentPage = 0;
        this.pageSize = 30;
        this.categorie = 'sportswear';
        this.functions = ['breatable', 'waterproof', 'windproof', 'thermal', 'quick dry', 'reflective details']; // &functions=${this.functions}
    }

    getWearables(weather) {
        this.functions = 'waterproof';
        console.log("This from the Clothing class: " + weather);

        const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${this.country}&lang=${this.lang}&currentpage=${this.currentPage}&pagesize=${this.pageSize}&categories=${this.categorie}&functions=${this.functions}`;

        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": this.apiKey,
                "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
    }
}