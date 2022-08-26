class Forecast {
    constructor(chosenCity){
        this.date = chosenCity.ob_time;
        this.description = `The temperature is ${chosenCity.temp}, but feels like ${chosenCity.app_temp} with ${chosenCity.weather.description.toLowerCase()}`;
    }
}

module.exports = Forecast;