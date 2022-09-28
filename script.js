
// Global variables:
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={2af87cb904809765cbfcdd3689556288}"

fetch(apiUrl)
    .then(function (response) {
      return response.json()
      })
    .then(function (data) {
        console.log(data)   
    })



// make variable to access index.html
// Var = input field

// var getWeather = button

// var containter = containter

// var forecast = 

// var currentDate = 
// moment().format('dddd, MMMM Do, YYYY')



// function getCity
// function getCurrentHistroy -- use local storage
// function createHistroy 
// function grabData -- grab temp, name -- request URL


// function fetchData(city) {
//     var apiKey = "f30dc0b71f772a037a522282770190be"
//     var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
//     container.innerHTML = ""
//     forecast.innerHTML = ""

//     fetch(requestUrl)



// const weatherDays = []  
// let currDay = null

// sampleData.list.forEach( function(tsObj){

//   // Makes a moment date object for each record
//   const dateObj = moment.unix(tsObj.dt)

//   // Generate the day # for the day in the date object
//   const dateNum = dateObj.format("DDD")

//   // If the current date in tsObj hasn't had a record put into weatherDays, do that now 
//   // Then skip over all other records for this day
//   if( dateNum !== currDay && weatherDays.length < 5 ){
//     weatherDays.push( tsObj )
//     currDay = dateNum
//   }

// })