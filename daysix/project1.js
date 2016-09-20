/*$(function () {

$('#btn_createList').click(function(){
    $(".ul_current").append($('<li>', {
         text: $('#input_listName').val()
    }));
});
});*/

$(function() {
    $("#list").click("button.remove", function(ev){
        console.log($(ev.target).parent().fadeOut);
    });
    $("button#head").click(function(ev){
        var doIt = $("doit").val();
        $("list").append("li" + doIt + "</li>" + '<button> class="remove">(x)</button');
        $("#doit").val("");


    });
});