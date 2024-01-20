const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fbc0ee13d4cd0ca7ed7b116299399f34";

class WeatherAPI {

    buildURL(locationName) {

        this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);

        this.weatherAPIURL.searchParams.append("q", locationName);

        this.weatherAPIURL.searchParams.append("units", "metric");

        this.weatherAPIURL.searchParams.append("appid", API_KEY);

        console.log(this.weatherAPIURL.toString());
    }

    async invokeURL() {

        const responseObj = await fetch(this.weatherAPIURL.toString());

        const responseJSON = await responseObj.json();

        return responseJSON;
    }

}

export { WeatherAPI }
