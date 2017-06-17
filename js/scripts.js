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

setInterval(function(){

  if($(window).width() <= 991) {
    console.log("test");
  } else  if($(window).width() >= 991) {
    console.log("test");
  }
  }, 3000);


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
