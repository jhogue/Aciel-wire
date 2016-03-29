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