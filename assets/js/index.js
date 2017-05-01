(function() {

	$(document).ready(function() {
	var t1 = new TimelineMax();
		t1.from($('.text-block'), 1, {top:"-200px", opacity:0, ease:Cubic.easeInOut})
		.from($('.body-block'), 1, {bottom:"-100px", opacity:0, ease:Cubic.easeInOut}, "-=1")		
		.from($('.image-block'), 1, {right:"-100px", opacity:0, ease:Cubic.easeInOut}, "-=1");
	});
	


})();
