var APIKey = "166a433c57516f51dfab1f7edaed8413";

var citiesSearched = []; ///this is for the recent searches

var currentDate0 = new Date();

var currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate() + 1);

var currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 2);

var currentDate3 = new Date();
currentDate3.setDate(currentDate3.getDate() + 3);

var currentDate4 = new Date();
currentDate4.setDate(currentDate4.getDate() + 4);

var currentDate5 = new Date();
currentDate5.setDate(currentDate5.getDate() + 5);


//call the fivedayforecast function here 
function fivedayforecast(){
  var alexander1 = $("#citySearcherinput").val().trim();
  var queryURL = "https://cors-anywhere.herokuapp.com///api.openweathermap.org/data/2.5/forecast/daily?q=" + alexander1 +
                          "&mode=json&units=imperial&cnt=5&appid=" + APIKey;
  
  $.ajax({
          url: queryURL,
          method: "GET"
        })
  // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
  console.log(queryURL);

$('#dayOneDate').html("<p>" + currentDate1 + "</p>");
$("#dayOneTemp").html("<p>" + "Temp: " + response.list[0].temp.max + "</p>");
$("#dayOneHumidity").html("<p>" + "Humidity: " + response.list[0].humidity + "</p>")

$('#dayTwoDate').html("<p>" + currentDate2 + "</p>");
$("#dayTwoTemp").html("<p>" + "Temp: " + response.list[1].temp.max + "</p>");
$("#dayTwoHumidity").html("<p>" + "Humidity: " + + response.list[1].humidity + "</p>")

$('#dayThreeDate').html("<p>" + currentDate3 + "</p>");
$("#dayThreeTemp").html("<p>" + "Temp: " + response.list[2].temp.max + "</p>");
$("#dayThreeHumidity").html("<p>" + "Humidity: " + + response.list[2].humidity + "</p>")

$('#dayFourDate').html("<p>" + currentDate4 + "</p>");
$("#dayFourTemp").html("<p>" + "Temp: " + response.list[3].temp.max + "</p>");
$("#dayFourHumidity").html("<p>" + "Humidity: " + + response.list[3].humidity + "</p>")

$('#dayFiveDate').html("<p>" + currentDate5 + "</p>");
$("#dayFiveTemp").html("<p>" + "Temp: " + response.list[4].temp.max + "</p>");
$("#dayFiveHumidity").html("<p>" + "Humidity: " + + response.list[4].humidity + "</p>")

///Below are the IF  statements that handle what image loads into the 5 Day Forecast
//Day One
if (response.list[0].weather.main = "Clear"){
$("#dayOneImg").attr("src", "clear.png")}
else if (response.list[0].weather.main = "Clouds"){
$("#dayOneImg").attr("src", "clouds.png")
}
else if (response.list[0].weather.main = "Drizzle"){
$("#dayOneImg").attr("src", "drizzle.png")
}
else if (response.list[0].weather.main = "Rain"){
$("#dayOneImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
}  
else if (response.list[0].weather.main = "Snow"){
$("#dayOneImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
}    
else if (response.list[0].weather.main = "Thunderstorm"){
$("#dayOneImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
}  
///Day Two
if (response.list[1].weather.main = "Clear"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/01d@2x.png")}
  else if (response.list[1].weather.main = "Clouds"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
  }
  else if (response.list[1].weather.main = "Drizzle"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
  }
  else if (response.list[1].weather.main = "Rain"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
  }  
  else if (response.list[1].weather.main = "Snow"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
  }    
  else if (response.list[1].weather.main = "Thunderstorm"){
  $("#dayTwoImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
  } 
/// Day Three
if (response.list[2].weather.main = "Clear"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/01d@2x.png")}
  else if (response.list[2].weather.main = "Clouds"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
  }
  else if (response.list[2].weather.main = "Drizzle"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
  }
  else if (response.list[2].weather.main = "Rain"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
  }  
  else if (response.list[2].weather.main = "Snow"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
  }    
  else if (response.list[2].weather.main = "Thunderstorm"){
  $("#dayThreeImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
  } 
///Day Four
if (response.list[3].weather.main = "Clear"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/01d@2x.png")}
  else if (response.list[3].weather.main = "Clouds"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
  }
  else if (response.list[3].weather.main = "Drizzle"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
  }
  else if (response.list[3].weather.main = "Rain"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
  }  
  else if (response.list[3].weather.main = "Snow"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
  }    
  else if (response.list[3].weather.main = "Thunderstorm"){
  $("#dayFourImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
  }  
///Day Five
if (response.list[4].weather.main = "Clear"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/01d@2x.png")}
  else if (response.list[4].weather.main = "Clouds"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
  }
  else if (response.list[4].weather.main = "Drizzle"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
  }
  else if (response.list[4].weather.main = "Rain"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
  }  
  else if (response.list[4].weather.main = "Snow"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
  }    
  else if (response.list[4].weather.main = "Thunderstorm"){
  $("#dayFiveImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
  }         
})}

    
  
      // This function handles the search button [Adds items to array and updates the page with that city]
      $("#searchButton").on("click", function(event) {
        var alexander1 = $("#citySearcherinput").val().trim();
        var queryURL = "https://cors-anywhere.herokuapp.com///api.openweathermap.org/data/2.5/weather?q=" + alexander1 +
                        "&units=imperial&appid=" + APIKey;
         
        event.preventDefault();
        $("#buttonHolder").empty();
        // This line grabs the input from the textbox
        var city = $("#citySearcherinput").val().trim();

        // Adding cties from the textbox to our array
        citiesSearched.push(city);
        localStorage.setItem('recentCities', JSON.stringify(citiesSearched));
        

        for (var i = 0; i < citiesSearched.length; i++){
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
        // Adding a class of movie-btn to our button
          a.addClass("city-btn");
        // Adding a data-attribute
          a.attr("data-name", citiesSearched[i]);
        // Providing the initial button text
          a.text(citiesSearched[i]);
        // Adding the button to the buttons-view div
          $("#buttonHolder").prepend(a);   
        }

        // Here we run our AJAX call to the OpenWeatherMap API. 
    ///There is another AJAX call nested in here that uses variables from Call 1 to fuel the results for Call 2
    $.ajax({
        url: queryURL,
        method: "GET"
      })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
    // Log the queryURL
        console.log(queryURL);
        
    // Log the resulting object
        console.log(response);
    
    // Transfer content to HTML
        $(".city").html("<h1>" + response.name + "</h1>");
        $(".temperature").html("<h3>" + "Temperature: " + response.main.temp + "</h3>");
        $(".windspeed").html("<h3>" + "Wind Speed: " + response.wind.speed + "</h3>");
        $(".todaysDate").html("<p>" + currentDate0 + "</p>")
        var cocoa = JSON.stringify(response.weather[0].main);
        console.log(cocoa);
        console.log(typeof(cocoa));
        
        if (cocoa === "Clear"){
          $("#todaysImg").html("<img src='clear.png'>")}
          else if (cocoa = "Clouds"){
          $("#todaysImg").html("<img src='clouds.png'>")
          }
          else if (cocoa == "Drizzle"){
          $("#todaysImg").html("<img src='drizzle.png'>")
          }
          else if (cocoa =="Rain"){
          $("#todaysImg").html("<img src='rain.png'>")
          }  
          else if (cocoa == "Snow"){
          $("#todaysImg").html("<img src='snow.png'>")
          }    
          else if (cocoa == "Thunderstorm"){
          $("#todaysImg").html("<img src='thunderstorm.png'>")
          }
        
    
    /// establish variables for lat and lon for the UV index
    var cityLat = response.coord.lat;
    var cityLon = response.coord.lon;

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com///api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon,
            method: "GET"
          }).then(function(response) {
            $(".uvindex").html("<h3>" + "UV Index: " + response.value + "</h3>");      
        
        });
 

    });



  fivedayforecast();


        
      });

    ///This function changes the data when you click a button that get added to the screen for each search.
    function displayRecentSearch() {
      var alexander1 = $(this).attr("data-name");

      var queryURL = "https://cors-anywhere.herokuapp.com///api.openweathermap.org/data/2.5/weather?q=" + alexander1 +
      "&units=imperial&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + "</h1>");
            $(".temperature").html("<h3>" + "Temperature: " + response.main.temp + "</h3>");
            $(".windspeed").html("<h3>" + "Wind Speed: " + response.wind.speed + "</h3>");
            
        
        /// establish variables for lat and lon for the UV index
        var cityLat = response.coord.lat;
        var cityLon = response.coord.lon;
    
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com///api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon,
                method: "GET"
              }).then(function(response) {
                $(".uvindex").html("<h3>" + "UV Index: " + response.value + "</h3>");
                    
            
            });
          
          })
        }

      // Adding a click event listener to all buttons with a class of "city-btn"
      $(document).on("click", ".city-btn", displayRecentSearch);

4
///write the FUNCTION here for the 5 day forecast under this
4