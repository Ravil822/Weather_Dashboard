




    // var city = "odessa";
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    // $.ajax({
    //     url: queryURL,
    //     method:"GET"
    // }).then(function (response) {
    //     console.log(response)
    // });


    // var city = "richmond";
    // var queryURL5D = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    // $.ajax({
    //     url: queryURL5D,
    //     method:"GET"
    // }).then(function (response) {
    //     console.log(response)
    //     for ( var i = 6; i < response.list.length; i += 8) {
    //         console.log(response.list[i])
    //     }
    // });


    // var city = "odessa";
    // var queryURLUV = "http://https://api.openweathermap.org/data/2.5/uvi?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    // $.ajax({
    //     url: queryURLUV,
    //     method:"GET"
    // }).then(function (response) {
    //     console.log(response)
    // });
    //     // create event when click search button
    //     $("#search_city").on("click", function(event){
    //         event.preventDefault();
    //         var city = $("#city_name").val()
    //     });

    //     // appending search of cities
    //     var citiesList = [];
    //     function citiesSearch(); {
    //         for (var i = 0; i < citiesList.length; i++);
    //         var citiesButton = $("<button>");
    //         citiesButton.text(citiesList[i]);
    //         $(".cities").append(citiesButton)
    // };
    // citiesSearch();

    // Set cities buttons
    var cities = [""];
    var date = moment();
    function displayWheater() {
        var citiname = $(this).attr("data-name")
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citiname + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response){
                console.log(response)
                //append city name and date
                $("#city_name").empty();
                $("#current-temp").empty();
                $("#current-humi").empty();
                $("#current-wind").empty();
                $("#uv_index").empty();


                var citydiv = $("#city_name")
                var currentDate = date.format("(MM/DD/YYYY)")
                var city = response.name + " "
                citydiv.append([city, currentDate]);
                // append temperature
                var tempDiv = $("#current-temp");
                var temp ="Temperature: " + response.main.temp + " °F"
                tempDiv.append(temp)
                // append humidity
                var humiDiv = $("#current-humi");
                var humi ="Humidity: " + response.main.humidity + " %";
                humiDiv.append(humi);
                // append wind speed
                var windDiv = $("#current-wind");
                var wind = "Wind Speed: " + response.wind.speed + " MPH";
                windDiv.append(wind);

                // append uv index
                        // make api call to get the index
                var UVqueryURL ="https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=246a9515c97ecb38ae4f2f7717982a0e";
                $.ajax({
                    url: UVqueryURL,
                    method: "GET"
                }).then(function(response){
                        // append the index
                    var uvDiv = $("#uv_index");
                    var uv = "UV index: " + response.value;
                    uvDiv.append(uv);

                });

                // make another call to the api to get 5 days forecast
                


            


            
            });

        
        

    }

    


    function renderButtons() {
        $(".cities-view").empty()
        for (var i = 0; i < cities.length; i++) {
            var a = $("<button>");
            a.addClass("city btn btn-primary d-block mb-1 mr-auto ml-auto");
            a.attr("data-name", cities[i]);
            a.text(cities[i]);
            $(".cities-view").prepend(a);
        }

    };

    $("#search_city").on("click", function (event) {
        event.preventDefault();
        var city = $("#add-city").val().trim();
        cities.push(city);
        renderButtons();
    });

    $(document).on("click", ".city", displayWheater);

    // Create click event with api request









