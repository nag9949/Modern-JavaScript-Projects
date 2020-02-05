//** Weather-App */
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();


//.... updateUI
const updateUI = (data) => {

  console.log(data); // city and weather data obj 

  //,,,,,,,Destructure the properties
  const {
    cityDetails,
    weatherDetails
  } = data;

  //.....Update the details-Template(replacing the data)
  details.innerHTML = `
      <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weatherDetails.WeatherText}</div>
      <div class="my-3"></div>
      <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
    `;

  // update the icon images
  const iconSource = `img/icons/${weatherDetails.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSource);

  // update the day/night imgaes
  let timeSource = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSource);

  //......remove the d-none class if it is present in card cls
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }


};


cityForm.addEventListener('submit', e => {
  // prevent the default action-(Refreshing the page)
  e.preventDefault();

  // get the city-value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city-value
  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


  // adding local-storage feature
  localStorage.setItem('city', city);

});

// by default we get the some city weather-info by using local-storage
if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));

}