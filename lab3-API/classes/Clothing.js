import Weather from './Weather.js';

export default class Clothing {
    constructor(apiKey, weather) {
        this.apiKey = apiKey;
        this.country = 'us';
        this.lang = 'en';
        this.currentPage = 0;
        this.pageSize = 30;
        this.categorie = 'sportswear';
        this.functions = "";
        this.getWearables(weather);
    }

    getWearables(weather) {
        switch (weather) {
            case 'Sunny' || 'Clear':
                this.functions = 'Breathable';
                break;
            
            case 'Partly cloudy':
                this.functions = 'Quickdry';
                break;

            case 'Cloudy':
                this.functions = 'Reflectivedetails';
                break;

            case 'Light rain':
                this.functions = 'Waterproof';
                break;

            case 'Moderate rain':
                this.functions = 'Water-repellent';
                break;

            case 'Heavy rain':
                this.functions = 'Water-repellent';
                break;

            case 'Overcast':
                this.functions = 'Reflective%20details';
                break;

            default:
                this.functions = 'Thermal';
                break;
        }

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
            const img = document.querySelector('#clothingPiece');
            const buyLink = document.querySelector('.clothing__buy');
            img.src = data.results[6].images[0].url;
            buyLink.href = data.baseUrl + data.results[6].linkPdp;
        })
        .catch(err => {
            console.error(err);
        });
    }
}