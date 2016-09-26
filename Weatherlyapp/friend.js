$(function () {
    var location = user.prompt.response
    var url = ("https://maps.googleapis.com/maps/api/geocode/json?address=" + user.prompt.response + "2&key=AIzaSyDgTR-lywqWl_7MSAH5FvpV7QMBWTpsRJg");
    
$.ajax(url)
    .done(function (data) {
        $("#rainsnow").append (data.location.lat);
    });
$.ajax(url)
    .done(function (data) {
        $("#friend").html(JSON.stringify(data));
});




$("#rainsnow").append(data.currently.temperature)


$("#friend").click(function (ev) {
    console.log(ev.target);
});

});

var location = user.prompt.response

"https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode +"2&key=AIzaSyDgTR-lywqWl_7MSAH5FvpV7QMBWTpsRJg"

var latitude = data.results[0].geometry.location.lat
var longitude = data.geometry.location.lng

https://api.darksky.net/forecast/3cb454feee3d28662007fe5bef209096/"latitude","longitude"
37.8267, -122.4233











