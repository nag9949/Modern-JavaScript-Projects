//only weather-api logic is availablehere 

class Forecast {

  constructor() {
    this.key = 'uBlqt74I3c51FGMv4TbBmU4ilwAurerQ';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  //....updateCity
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weatherDetails = await this.getWeather(cityDetails.Key);
    return {
      cityDetails,
      weatherDetails
    };
  }
  //....Get the city-info
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  //....Get the Weather-info
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }

}