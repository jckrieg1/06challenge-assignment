
// Global variables:
const weatherDays = [];
var city = "";
let currDay = null
var forecastTemp = [];
var forecastWind = [];
var forecastHumidity = [];
var forecastIcon = [];
var forecastDate = [];
var searchBtn = document.getElementById("btn");
var inputText = document.getElementById("input-field");
var apiKey = "2af87cb904809765cbfcdd3689556288";
var apiUrl = "";
var savedCities = [];
var leftCol = document.getElementById('weather-dashboard');


cityHistory();
function apiCall() {
fetch(apiUrl)
  .then(function (response) {
    console.log(response)
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    
    // extract the data from your data obj
    let day1Temp = data.main.temp;
    let day1Humidity = data.main.humidity;

    let day2Temp = data.main.temp;

    data.forEach(function (tsObj) {

      // Makes a moment date object for each record
      const dateObj = moment.unix(tsObj.dt)

      // Generate the day # for the day in the date object
      const dateNum = dateObj.format("DDD")

      // If the current date in tsObj hasn't had a record put into weatherDays, do that now 
      // Then skip over all other records for this day
      if (dateNum !== currDay && weatherDays.length < 5) {
        weatherDays.push(tsObj)
        currDay = dateNum
      }
    })
    weather();
    console.log(forecastTemp);
  });
}

// grabbing the temp, wind, icon, date, humidity for the five days
function weather() {
for (var i = 0; i < weatherDays.length; i++) {
  forecastTemp.push(weatherDays[i].main.temp);
  forecastHumidity.push(weatherDays[i].main.humidity);
  forecastWind.push(weatherDays[i].wind.speed);
  forecastIcon.push(weatherDays[i].weather[0].icon);
  forecastDate.push(weatherDays[i].dt_txt);
}
}

// Gets the text input for the city:
function getCity() {
  city = inputText.value;
  savedCities.push(city);
  localStorage.setItem('storedCity', savedCities);
};


function cityHistory() {
  for(i=0; i<savedCities.length; i++) {
  var newCityBtn = document.createElement('button');
  var retrievedCity = localStorage.getItem('storedCity');
  newCityBtn.textContent = retrievedCity[i];
  leftCol.appendChild(newCityBtn);
}
}

cityHistory();
searchBtn.addEventListener("click", function() {
  getCity();
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  console.log(city);
  console.log(apiUrl);
  cityHistory();
  apiCall();
  
});


// // function getCurrentHistroy -- use local storage
// // function createHistroy 


// // function fetchData(city) {
// //     container.innerHTML = ""
// //     forecast.innerHTML = ""

// //     fetch(requestUrl)
