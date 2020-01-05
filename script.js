var APIKey = "166a433c57516f51dfab1f7edaed8413";

var citiesSearched = []; ///this is for the recent searches


    
  
      // This function handles the search button [Adds items to array and updates the page with that city]
      $("#searchButton").on("click", function(event) {
        var alexander1 = $("#citySearcherinput").val().trim();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + alexander1 +
                        "&units=imperial&appid=" + APIKey;
         
        event.preventDefault();
        $("#buttonHolder").empty();
        // This line grabs the input from the textbox
        var city = $("#citySearcherinput").val().trim();

        // Adding cties from the textbox to our array
        citiesSearched.push(city);

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





        
      });

    ///This function controls the buttons that get added to the screen for each search
    function displayRecentSearch() {
      var alexander1 = $(this).attr("data-name");

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + alexander1 +
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
                url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon,
                method: "GET"
              }).then(function(response) {
                $(".uvindex").html("<h3>" + "UV Index: " + response.value + "</h3>");      
            
            });
          })
        }

      // Adding a click event listener to all buttons with a class of "city-btn"
      $(document).on("click", ".city-btn", displayRecentSearch);