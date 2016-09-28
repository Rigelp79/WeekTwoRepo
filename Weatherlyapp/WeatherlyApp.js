$(function () {
    $("#suBmit").click(function (ev) {
        var zipCode = $("#zip").val();
        getFromGoogle(zipCode);
        $("#zip").val("");
    });
    $("#clEar").click(function(){
        location.reload();
    })

});

var getFromGoogle = function (zipCode) {
    var googleKey = "&key=AIzaSyDgTR-lywqWl_7MSAH5FvpV7QMBWTpsRJg";
    var google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + googleKey;


    $.ajax(google).done(function (data) {
        var nameCity = data.results[0].address_components[1].long_name;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;
        $(".printCity").empty().append(nameCity);

        getFromDarkSky(lati, lon, nameCity);
    });
}


var getFromDarkSky = function (latitude, longitude, nameCity) {
    var darkSkyKey = "3cb454feee3d28662007fe5bef209096";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {
        
        var div = $("<div class='col-sm-6 col-md-4 rainsnow'></div>");
        div.append("<p>" + nameCity + "</p>");
        var conDition = data.currently.summary;
        div.append("<p>" + conDition + "</p>");
        var tEmp = data.currently.temperature;
        div.append("<p>temp " + tEmp + "&#8457</p>");
        var preCip = data.currently.precipProbability;
        div.append("<p>precip " + preCip + "%</p>");
        var minTemp = data.daily.data[0].temperatureMin;
        div.append("<p>min temp " + minTemp + "&#8457</p>");
        var maxTemp = data.daily.data[0].temperatureMax;
        div.append("<p>max temp " + maxTemp + "&#8457</p>");
        $(".row").append(div);
    });
}


























