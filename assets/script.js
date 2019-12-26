




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
    function displayWheater() {
        var citiname = $(this).attr("data-name")
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citiname + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response){
                console.log(response);
                $("#city_name")= val(response.name);
            })

        
        

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









