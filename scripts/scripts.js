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

	$(".menubutton").mouseenter(function() {
    	$(this).css({"z-index" : "900"});
	});

	$(".menubutton").mouseleave(function() {
			var that=this;
			setTimeout(function() {
    			$(that).css({"z-index" : "0"});
				console.log("meme")
			}, 200);
	});

});

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
console.log(initmap())