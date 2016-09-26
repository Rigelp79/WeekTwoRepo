$(function () {
    $("#suBmit").click(function (ev) {
        var zipCode = $("#zip").val();
        getFromGoogle(zipCode);
        $("#zip").val("");
    });

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

        getFromDarkSky(lati, lon);
    });
}


var getFromDarkSky = function (latitude, longitude) {
    var darkSkyKey = "3cb454feee3d28662007fe5bef209096";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        var conDition = data.currently.summary;
        $(".printCon").empty().append(conDition);
        console.log(conDition);

        var tEmp = data.currently.temperature;
        $(".printTemp").empty().append(tEmp);
        console.log(tEmp);

        var preCip = data.currently.precipProbability;
        $(".printPrecip").empty().append(preCip);
        console.log(preCip);

        var minTemp = data.daily.data[0].temperatureMin;
        $(".printMinTemp").empty().append(minTemp);
        console.log(minTemp);

        var maxTemp = data.daily.data[0].temperatureMax
        $(".printMaxTemp").empty().append(maxTemp);
        console.log(maxTemp);

        $(".print")
    });

    $(function (data) {
        var div = $("<div></div>");
        var conDition = data.currently.summary;
        div.append(conDition);
        var tEmp = data.currently.temperature;
        div.append(tEmp);
        var preCip = data.currently.precipProbability;
        div.append(preCip);
        var minTemp = data.daily.data[0].temperatureMin;
        div.append(minTemp);
        var maxTemp = data.daily.data[0].temperatureMax;
        div.append(maxTemp);
        $("#zip").append(div);
    });

}


























