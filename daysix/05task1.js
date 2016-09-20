/*$(function(){
$("#para").click(function(ev) {
    //$("para").fadeOut('slow' , 'linear');
//$(this).fadeOut('slow','linear');
   // $(ev.target).fadeOut('slow','linear');
});
   //$("h3").css("text-decoration", "underline");


   //$("ul li:first-child")
   //$("ul").find("li:nth-child(2)").css("color","red");
});*/



$(function(){
    $("button").click(function(){
     $("ul").append("<li>Item2 <button class="remove">Remove</button></li>");  
    

  });
   $("remove").click(function(ev){
       console.log(ev);
       $(ev.target).parent().fadeOut();
   }) 
   $("#name").blur(function(){
   
    var name = $(ev.target).val();
    alert("Hello, " + name)
});

});

