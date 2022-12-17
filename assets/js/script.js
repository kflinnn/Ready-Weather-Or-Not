//Global Variables
var userFormEl = $("#user-form");
var searchButton = $("#search-button");
var resultsFormEl = $("#results-card");
var forecastContainerEl = $("#forecast-container");


var apiKey = "da7faa56794c42ea4ad50f04bea2b9cd"
//var urlRequest = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var city = $("#city-name");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

//Event Listener to make button work
searchButton.on("click", function(){
    var userInput = document.querySelector("#city-name").value;
localStorage.setItem("city", userInput);
console.log(userInput);
});

//Function to fetch API
// fetch(queryURL)
// .then(function(response){
//     console.log(response);
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     for (var i = 0; i < data.length; i++){
        
//     }
// })