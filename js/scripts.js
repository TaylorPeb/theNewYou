// Test to see if jQuery is working

//var touches = event.touches.length;



/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/

$(document).ready(function() {

/*
  $(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();

    $('.landI').css({
      'transform' : 'translate(0px, '+  wScroll /-6 +'%)'
    });
  });
*/

  if($(window).width() <= 992) {
    console.log("meme");
    $(".catePho.col-md-4:nth-child(2) .cateImg2").remove();
    $(".catePho.col-md-4:nth-child(2)").remove();
    //$(".cateCell:nth-child(2)").append("<div class="catePho col-md-4"></div>");
    //$(".catePho.col-md-4:nth-child(2)").prepend("<div class="catePho col-md-4"><img id="cateImg2" src="images/weightloss1.jpg"></div>");
  }
  $(".mmbar, .drape").click(function() {
    if($(".container-fluid").hasClass("rev")){
      $(".container-fluid").removeClass("rev");
      $(".container-fluid").addClass("clo");
    } else {
      $(".container-fluid").addClass("rev");
      $(".container-fluid").removeClass("clo");
    }
  });

  $('.noselect').on('dragstart', function(event) { event.preventDefault(); 
    console.log("test");
  });



/*
setInterval(function(){

  var windowH = window.innerHeight - 71;
  var windowL = window.innerWidth;
  $(".img-wrapper").css({"height" : windowH});
  $(".img-wrapper").css({"width" : "auto\9"});
  console.log(windowH);
}, 600);
*/

/*  //Parllax scrolling Effect
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.paraText').css({
      'transform' : 'translate(0px, '+ wScroll /1 +'%)'
    });
  });
*/
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~GOOGLE MAPS INIT~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~
function initMap() {
        var uluru = {lat: 48.2417233, lng: -122.3610419};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
