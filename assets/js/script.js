//Global Variables
var userFormEl = $("#user-form");
var searchButton = $("#search-btn");
var resultsFormEl = $("#results-card");
//var resultsFormSpan = $("#results-history-text");
var forecastContainerEl = $("#forecast-container");


var apiKey = "da7faa56794c42ea4ad50f04bea2b9cd"
//var urlRequest = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var city = document.getElementById("user-input").value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

//console.log(queryURL)

//Event Listener to make button work
searchButton.on("click", function(){
    //event.preventDefault();
    var city = document.getElementById("user-input").value;
   localStorage.setItem("city", city);
    renderUserInput();
});


//Function to render user input from local storage
function renderUserInput() {
    var storedCity = localStorage.getItem("city");

    if (!storedCity) {
        return;
    } else if (storedCity !== null) {
        document.querySelector(".results-history-text").innerHTML = storedCity;
    }
}

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