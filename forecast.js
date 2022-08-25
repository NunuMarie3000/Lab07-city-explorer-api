// class Forecast {
//     constructor(chosenCity, index){
//         this.date = chosenCity.data[index].valid_date;
//         this.low = chosenCity.data[index].low_temp;
//         this.high = chosenCity.data[index].high_temp;
//         this.des = chosenCity.data[index].weather.description;
//         this.description = `Low of ${this.low}, hight of ${this.high} with ${this.des}`;
//     }
// }

class Forecast {
    constructor(chosenCity){
        this.date = chosenCity.datetime;
        this.description = `The temperature is ${chosenCity.temp}, but feels like ${chosenCity.app_temp} with ${chosenCity.weather.description}`;
    }
}

module.exports = Forecast;