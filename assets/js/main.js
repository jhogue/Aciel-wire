//Insert awesome js here!

//Primary Navigation Menu js

$(document).ready(function() {


	//<a href="#overlay" class="mainnav--button js-overlay"><span class="fa fa-bars" aria-hidden="true"><span>&equiv;</span></span></a>
	$('#overlay').hide();
	$('.js-overlay').on('click', function(e) {
		e.preventDefault();
		$('#overlay').toggle(250);
		$(this).toggleClass('js-toggle-active');
		$('body').toggleClass('js-overlay-active');
	});
	$('#body-overlay').on('click', function(b) {
		b.preventDefault();
		$('#overlay').hide(250);
		$('.mainnav--button').removeClass('js-toggle-active');
		$('body').removeClass('js-overlay-active');
	});


	// General accordion trigger
	$('.js-accordion').on('click', function(e) {
		e.preventDefault();
		
		var trigger = $(this),
			target = $(trigger).attr('href');
		$(target).slideToggle(250).toggleClass('js-target-open');
		$(trigger).toggleClass('js-toggle-active');
		
		// Close all others
		//$('.js-target-open').each( function(){
		//	$(this).slideUp(250);
		//});
	});


	//<a href="#searchform" class="mainnav--button"><span class="fa fa-search" aria-hidden="true"><span>Search</span></span></a>
	$('.js-search-trigger').on('click', function(s) {
		s.preventDefault();
		$('#searchform').slideToggle(250).toggleClass('js-target-open');
		$(this).toggleClass('js-toggle-active');
	});


	// Initiate Waypoints shortcut
	if( $('.js-sticky').length > 0 ) {
		var sticky = new Waypoint.Sticky({
			element: $('.js-sticky')[0],
		});
	}


	// Inititiate the vertical "App Store" slide carousel
	var vertslider = $('.js-vertgallery').royalSlider({
		autoHeight: false, 
		arrowsNav: false,
		arrowsNavAutoHide: true,
		arrowsNavHideOnTouch: true,
		autoPlay: {
			enabled: false,
			pauseOnHover: true,
			delay: 5000
		},
		// Sets the aspect ratio of the slider. Imgs fit inside vert or horiz
		autoScaleSlider: true, 
		autoScaleSliderWidth: 800,     
		autoScaleSliderHeight: 293, // account for the thumbnail column. 21:9 ratio minus 50px
		controlsInside: false,
		controlNavigation: 'thumbnails', // thumbnails, tabs, bullets
		controlNavigationSpacing: 0,
		fadeinLoadedSlide: false,
		fullscreen: {
			enabled: false,
			nativeFS: false
		},
		globalCaption: true,
		imageAlignCenter: false,
		imageScaleMode: 'fill', // fill, none
		loop: false,
		loopRewind: false,
		keyboardNavEnabled: true,
		navigateByClick: false,
		numImagesToPreload: 2,
		slidesSpacing: 0,
		startSlideId: 0,
		thumbs: {
			orientation: 'vertical',
			paddingBottom: 0,
			appendSpan: true
		},
		thumbsFitInViewport: false,
		transitionSpeed: 500,
		transitionType:'fade',
		video: {
			autoHideControlNav: true,
			autoHideBlocks: true
		}
	}).data('royalSlider');
	
	// Inititiate the horizontal homepage slide carousel
	var vertslider = $('.js-horizgallery').royalSlider({
		autoHeight: false, 
		arrowsNav: true,
		arrowsNavAutoHide: true,
		arrowsNavHideOnTouch: false,
		autoPlay: {
			enabled: true,
			pauseOnHover: true,
			delay: 7000
		},
		// Sets the aspect ratio of the slider. Imgs fit inside vert or horiz
		autoScaleSlider: false, 
		controlsInside: true,
		controlNavigation: 'none', // thumbnails, tabs, bullets, none
		controlNavigationSpacing: 0,
		fadeinLoadedSlide: false,
		fullscreen: {
			enabled: false,
			nativeFS: false
		},
		globalCaption: false,
		imageAlignCenter: false,
		imageScaleMode: 'none', // fill, none
		loop: true,
		loopRewind: false,
		keyboardNavEnabled: true,
		navigateByClick: false,
		numImagesToPreload: 4,
		slidesSpacing: 0,
		startSlideId: 0,
		thumbs: {
			orientation: 'vertical',
			paddingBottom: 0,
			appendSpan: true
		},
		thumbsFitInViewport: false,
		transitionSpeed: 500,
		transitionType: 'fade',
		video: {
			autoHideControlNav: true,
			autoHideBlocks: true
		}
	}).data('royalSlider');
    

	/* 
     * Animate some scrolling for smoother transitions 
     * http://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    $(function() {
        $('.smooth-scroll').click(function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    e.preventDefault();
                }
            }
        });
    });
    
    
    // Devlopment Only
    $(window).on('resize', showSize);

	showSize();
	
	function showSize() {
		$('#size').html( $(window).width() + ' x ' + $(window).height());
	}
});