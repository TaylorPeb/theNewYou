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