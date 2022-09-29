
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
var apiKey = "f30dc0b71f772a037a522282770190be";
var apiUrl = "";
function apiCall() {
fetch(apiUrl)
  .then(function (response) {
    console.log(response)
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    
    // extract the data from your data obj

    let day1Temp = data.list[0].main.temp;
    let day1Humidity = data.list[0].main.humidity;

    let day2Temp = data.list[8].main.temp;

    data.list.forEach(function (tsObj) {

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
};

searchBtn.addEventListener("click", function() {
  getCity();
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  console.log(city);
  apiCall();
});


// // function getCurrentHistroy -- use local storage
// // function createHistroy 
// // function grabData -- grab temp, name -- request URL


// // function fetchData(city) {
// //     container.innerHTML = ""
// //     forecast.innerHTML = ""

// //     fetch(requestUrl)

