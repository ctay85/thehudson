$(document).ready(function (){

	// Go to Top
	$(".go-top a").click(function (){
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 1000);
	});

	// Scroll to next section on Home page
	$("#home .arrow-down").click(function (){
		$('html, body').animate({
			scrollTop: $("#home .intro-desc").offset().top
		}, 1000);
	});

	// Remove scroll when opened mobile nav
	$('header .navbar-toggle').click(function (){
		$('.navbar').toggleClass('full-screen');
		$('body').toggleClass('overflow-h');
	});

	// Calculate height for mobile menu
	$(window).resize(function(){
		if ($(window).width() < 992) {
			$(".responsive-nav").css("height", $(window).height()-274);
			console.log($(window).height());
		} if ($(window).width() > 991) {
			if ($(".responsive-nav").css("height") != '0px') {
				$(".responsive-nav").css("height", "auto");
				console.log("not auto");
			}
		}
	});
	if ($(window).width() < 992) {
		$(".responsive-nav").css("height", $(window).height()-274);
	}

	// Light box settings
	lightbox.option({
      'positionFromTop': 100
    })

	// Settings of video player on Home page
    var player = $('#my-video').get(0);
    function playPause() { 
	    if (player.paused) {
	        player.play();
	        console.log("click");
	        $("#home .video-controls").css("display", "none");
	    }
	    else {
	        player.pause();
	        $("#home .video-controls").css("display", "flex");
	    }
	}

	$(".intro-video a").on("click", function() {
		playPause();
	});
	
	$("#my-video").on("tap", function() {
		console.log("click");
		playPause();
	});

	// Panorama 360 plugin settings
	$('.panorama-view').panorama360({
		sliding_controls: true
	});
	jQuery('.panorama-links a').click(function(ev) {
		ev.preventDefault();
		if (jQuery(this).hasClass('active')) return;
		jQuery('.panorama .preloader').show();
		jQuery('.panorama-links a').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.panorama .panorama-container').html(jQuery(this).next().html());
		jQuery('.panorama .panorama-view').panorama360();
		jQuery('.panorama .preloader').hide();
		jQuery('.panorama .panorama-view').show();
	});

	$("#viewtabs .catFilter").on("click", function(){
		
	})
});

