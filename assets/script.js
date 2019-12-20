$(document).ready(function () {
    var city = "odessa";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function (response) {
        console.log(response)
    });


    var city = "richmond";
    var queryURL5D = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    $.ajax({
        url: queryURL5D,
        method:"GET"
    }).then(function (response) {
        console.log(response)
    });


    var city = "odessa";
    var queryURLUV = "http://https://api.openweathermap.org/data/2.5/uvi?q=" + city + "&units=imperial&appid=246a9515c97ecb38ae4f2f7717982a0e";
    $.ajax({
        url: queryURLUV,
        method:"GET"
    }).then(function (response) {
        console.log(response)
    });


});



