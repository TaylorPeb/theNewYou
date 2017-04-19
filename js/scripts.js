// Test to see if jQuery is working
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


 //retrieves window height


setInterval(function(){

  var windowH = window.innerHeight - 71;
  var windowL = window.innerWidth;
  $(".item img").css({"height" : windowH});
  $(".item img").css({"width" : "auto"});
  console.log(windowH);
}, 600);
  //Tests mouse entering menubutton
	$(".menubutton").mouseenter(function() {
    	$(this).css({"z-index" : "900"});
	});


  //Tests mouse leaving menubutton
	$(".menubutton").mouseleave(function() {
			var that=this;
			setTimeout(function() {
    			$(that).css({"z-index" : "0"});
				console.log("meme");
			}, 200);
	});

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