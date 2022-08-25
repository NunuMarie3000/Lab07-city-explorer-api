class Forecast {
    constructor(chosenCity, index){
        this.date = chosenCity.data[index].valid_date;
        this.low = chosenCity.data[index].low_temp;
        this.high = chosenCity.data[index].high_temp;
        this.des = chosenCity.data[index].weather.description;
        this.description = `Low of ${this.low}, hight of ${this.high} with ${this.des}`;
    }
}

module.exports = Forecast;