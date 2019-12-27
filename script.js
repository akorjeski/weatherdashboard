var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Philadelphia,Pennslvania&units=imperial&appid=" + APIKey;
var citiesSearched = []; ///this is for the recent searches


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
    
    /// establish variables for lat and lon for the UV index
    var cityLat = response.coord.lat;
    var cityLon = response.coord.lon;

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon,
            method: "GET"
          }).then(function(response) {
            $(".uvindex").html("<h3>" + "UV Index: " + response.value + "</h3>");      
        
        });

    });

  
      // This function handles events when you add a city to the recently searched array
      $("#searchButton").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#citySearcherinput").val().trim();

        // Adding cties from the textbox to our array
        citiesSearched.push(city);
      });

    