(function() {

	$(document).ready(function() {
	var t1 = new TimelineMax();
		t1.staggerFrom('.text-block', 1, {top:"-200px", opacity:0, ease:Cubic.easeInOut}, 0.5, "-=1")
		.staggerFrom('.body-block', 1, {bottom:"-100px", opacity:0, ease:Cubic.easeInOut}, 0.5, "")		
		.staggerFrom('.image-block', 1, {right:"-100px", opacity:0, ease:Cubic.easeInOut}, 0.5,"-=0.5");
	});
	


})();
