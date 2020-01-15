//only weather-api logic is availablehere 
// accWeather-api-key = 	zeVcsmZU3PgQO7GeZfEJd21f2mtM8hXv

const key = '	zeVcsmZU3PgQO7GeZfEJd21f2mtM8hXv';

//....Get the Weather-info
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

//....Get the city-info
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];

};
