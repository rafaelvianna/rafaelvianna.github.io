$(document).ready(function(){
  if ($( window ).width() > 1199) {
    if (location.hash === '#simulation') {
      $(document).scrollTop( $("#menu-simulation").offset().top - 140 )
    } else {
      $(document).scrollTop( $("#menu-simulation").offset().top - 100 )
    }
  } 

  if($(document).width() < 1024) {
    $('.advantages-content div').removeClass('wow'); 
    $('.advantages-content div').removeClass('slideInLeft')
  }

  $('#menu-how-works').on('click', function() {
    var anchorLink = $('#how-works');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#footer-how-work').on('click', function() {
    var anchorLink = $('#how-works');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-about-us').on('click', function() {
    var anchorLink = $('#about-us');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#footer-about-us').on('click', function() {
    var anchorLink = $('#about-us');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-simulation').on('click', function() {
    var anchorLink = $('#simulation');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 130 }, 500);
  })
  
  $('#footer-simulation').on('click', function() {
    var anchorLink = $('#simulation');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 130 }, 500);
  }) 

  $('#footer-testimonials').on('click', function() {
    var anchorLink = $('#testimonials');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-contact').on('click', function() {
    var anchorLink = $('#contact');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#footer-contact').on('click', function() {
    var anchorLink = $('#contact');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  
}); 