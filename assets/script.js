function renderButtons() {
    $(".cities-view").empty()
    for (var i = 1; i < cities.length; i++) {
        var a = $("<div>");
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
    localStorage.setItem("City-list", JSON.stringify(cities));
    renderButtons();
});



var cities = [""];
var date = moment();
function displayWheater() {
    var citiname = $(this).attr("data-name")
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citiname + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //append city name and date
        $("#city_name").empty();
        $("#current-temp").empty();
        $("#current-humi").empty();
        $("#current-wind").empty();
        $("#uv_index").empty();


        var citydiv = $("#city_name")
        var picIndex = response.weather[0].icon
        var picURL = "https://openweathermap.org/img/w/" + picIndex + ".png"
        var pic = $("<img>").attr("src", picURL)
        var currentDate = date.format("(MM/DD/YYYY)")
        var city = response.name + " "
        citydiv.append([city, currentDate,pic]);
        // append temperature
        var tempDiv = $("#current-temp");
        var temp = "Temperature: " + response.main.temp + " °F"
        tempDiv.append(temp)
        // append humidity
        var humiDiv = $("#current-humi");
        var humi = "Humidity: " + response.main.humidity + " %";
        humiDiv.append(humi);
        // append wind speed
        var windDiv = $("#current-wind");
        var wind = "Wind Speed: " + response.wind.speed + " MPH";
        windDiv.append(wind);

        // append uv index
        // make api call to get the index
        var UVqueryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=246a9515c97ecb38ae4f2f7717982a0e";
        $.ajax({
            url: UVqueryURL,
            method: "GET"
        }).then(function (response) {
            // append the index
            var uvDiv = $("#uv_index").addClass("btn btn-danger");
            var uv = "UV index: " + response.value
            uvDiv.append(uv);

        });

        var queryURL5D = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
        $.ajax({
            url: queryURL5D,
            method: "GET"
        }).then(function (response) {
            console.log(response)
           
            $("#day_1").empty();$("#day_2").empty();$("#day_3").empty();$("#day_4").empty();$("#day_5").empty();
           
            var date1 = $("#day_1")
            var d1 = moment().format("MM/DD/YYYY")
            date1.append(d1);

            var date2 = $("#day_2")
            var d2 = moment().add(1,"d").format("MM/DD/YYYY")
            date2.append(d2);

            var date3 = $("#day_3")
            var d3 = moment().add(2,"d").format("MM/DD/YYYY")
            date3.append(d3);

            var date4 = $("#day_4")
            var d4 = moment().add(3,"d").format("MM/DD/YYYY")
            date4.append(d4);

            var date5 = $("#day_5")
            var d5 = moment().add(4,"d").format("MM/DD/YYYY")
            date5.append(d5);

            // Day 1 content

            $("#pic_1").empty()
            var picIndex1 = response.list[4].weather[0].icon
            var picURL1 = "https://openweathermap.org/img/w/" + picIndex1 + ".png"
            var pic1 = $("<img>").attr("src", picURL1)
            var picDiv1 = $("#pic_1")
            picDiv1.append(pic1);

            $("#current-temp1").empty(); $("#current-humi1").empty() 
            var tempDiv1 = $("#current-temp1");
            var temp1 = "Temp: " + response.list[4].main.temp + " °F"
            tempDiv1.append(temp1)

            var humiDiv1 = $("#current-humi1");
            var humi1 = "Humidity: " + response.list[4].main.humidity + "%";
            humiDiv1.append(humi1);

            // Day 2 content

            $("#pic_2").empty()
            var picIndex2 = response.list[12].weather[0].icon
            var picURL2 = "https://openweathermap.org/img/w/" + picIndex2 + ".png"
            var pic2 = $("<img>").attr("src", picURL2)
            var picDiv2 = $("#pic_2")
            picDiv2.append(pic2);

            $("#current-temp2").empty(); $("#current-humi2").empty()
            var tempDiv2 = $("#current-temp2");
            var temp2 = "Temp: " + response.list[12].main.temp + " °F"
            tempDiv2.append(temp2)

            var humiDiv2 = $("#current-humi2");
            var humi2 = "Humidity: " + response.list[12].main.humidity + "%";
            humiDiv2.append(humi2);

            // Day 3 content

            $("#pic_3").empty()
            var picIndex3 = response.list[20].weather[0].icon
            var picURL3 = "https://openweathermap.org/img/w/" + picIndex3 + ".png"
            var pic3 = $("<img>").attr("src", picURL3)
            var picDiv3 = $("#pic_3")
            picDiv3.append(pic3);

            $("#current-temp3").empty(); $("#current-humi3").empty()
            var tempDiv3 = $("#current-temp3");
            var temp3 = "Temp: " + response.list[20].main.temp + " °F"
            tempDiv3.append(temp3)

            var humiDiv3 = $("#current-humi3");
            var humi3 = "Humidity: " + response.list[20].main.humidity + "%";
            humiDiv3.append(humi3);

            // Day 4 content

            $("#pic_4").empty()
            var picIndex4 = response.list[28].weather[0].icon
            var picURL4 = "https://openweathermap.org/img/w/" + picIndex4 + ".png"
            var pic4 = $("<img>").attr("src", picURL1)
            var picDiv4 = $("#pic_4")
            picDiv4.append(pic4);

            $("#current-temp4").empty(); $("#current-humi4").empty()
            var tempDiv4 = $("#current-temp4");
            var temp4 = "Temp: " + response.list[28].main.temp + " °F"
            tempDiv4.append(temp4)

            var humiDiv4 = $("#current-humi4");
            var humi4 = "Humidity: " + response.list[28].main.humidity + "%";
            humiDiv4.append(humi4);

            // Day 5 content 

            $("#pic_5").empty()
            var picIndex5 = response.list[36].weather[0].icon
            var picURL5 = "https://openweathermap.org/img/w/" + picIndex5 + ".png"
            var pic5 = $("<img>").attr("src", picURL1)
            var picDiv5 = $("#pic_5")
            picDiv5.append(pic5);

            $("#current-temp5").empty(); $("#current-humi5").empty()
            var tempDiv5 = $("#current-temp5");
            var temp5 = "Temp: " + response.list[24].main.temp + " °F"
            tempDiv5.append(temp5)

            var humiDiv5 = $("#current-humi5");
            var humi5 = "Humidity: " + response.list[24].main.humidity + "%";
            humiDiv5.append(humi5);

    
            });

    });
    
};


$(document).on("click", ".city", displayWheater);









