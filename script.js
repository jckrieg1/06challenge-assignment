
// Global variables:
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Denver&units=imperial&appid=2af87cb904809765cbfcdd3689556288";
const weatherDays = [];
let currDay = null
var forecastTemp = [];
var forecastWind = [];
var forecastHumidity = [];
var forecastIcon = [];
var forecastDate = [];

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

    // ** put that info on the screen 
    // reach into your html 
    // grab the element you want to stick new data into
    // const day1El =  document.querySelector or use document.getElementById
    // replace the fake data w/ you data





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
  });

console.log(weatherDays);
console.log(weatherDays[0]);

// grabbing the temp, wind, icon, date, humidity for the five days
function weather() {
for (var i = 0; i < weatherDays.length; i++) {
  forecastTemp.push(weatherDays[i].main.temp);
  forecastHumidity.push(weatherDays[i].main.humidity);
  forecastWind.push(weatherDays[i].wind.speed);
  forecastIcon.push(weatherDays[i].weather[0].icon);
  forecastDate.push(weatherDays[i].dt_txt);
  // var wind = weatherDays[i].main.wind.speed;
  // var humidity = weatherDays[i].main.humidity;
  // var date = weatherDays[i].dt_txt;
  // var icon = weatherDays[i].weather[0].icon
  // console.log(forecastTemp);
}
}


// Why is this showing up as undefined????!
// console.log(weatherDays[0]);

// // console.log(forecastTemp);

// // make variable to access index.html
// // Var = input field

// // var getWeather = button

// // var containter = containter

// // var forecast = 

// // var currentDate = 
// // moment().format('dddd, MMMM Do, YYYY')



// // function getCity
// // function getCurrentHistroy -- use local storage
// // function createHistroy 
// // function grabData -- grab temp, name -- request URL


// // function fetchData(city) {
// //     var apiKey = "f30dc0b71f772a037a522282770190be"
// //     var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
// //     container.innerHTML = ""
// //     forecast.innerHTML = ""

// //     fetch(requestUrl)

