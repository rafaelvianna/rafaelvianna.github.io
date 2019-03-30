jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.box-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
		    		$('.box-header').addClass('is-visible');
		    	} else {
		    		$('.box-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.box-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.box-header').hasClass('is-fixed')) $('.box-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		$('body').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

$('.menu-item').on('click', function(){
	$('.box-menu-icon').removeClass('is-clicked'); 
	$('.box-header').removeClass('menu-is-open');
	$('body').removeClass('menu-is-open');
});

$( document ).scroll(function() {
	if(window.pageYOffset > 700) {
		$('.box-header').addClass('active');
	} else {
		$('.box-header').removeClass('active');
	}
});


$(document).ready(function(){
  $('#menu-cases').on('click', function() {
    var anchorLink = $('#cases');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 0 }, 500);
  })

  $('#menu-capabilities').on('click', function() {
    var anchorLink = $('#capabilities');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 80 }, 500);
  })

  $('#menu-feedback').on('click', function() {
    var anchorLink = $('#feedback');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 80 }, 500);
  }) 

  $('#menu-contact').on('click', function() {
    var anchorLink = $('#contact');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 0 }, 500);
	})
	
	$('#menu-home').on('click', function() {
    var anchorLink = $('#home');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 0 }, 500);
  })
}); 