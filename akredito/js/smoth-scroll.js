$(document).ready(function(){
  $('#menu-how-works').on('click', function() {
    var anchorLink = $('#how-works');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-about-us').on('click', function() {
    var anchorLink = $('#about-us');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-simulation').on('click', function() {
    var anchorLink = $('#simulation');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - 130 }, 500);
  }) 

  $('#menu-testimonials').on('click', function() {
    var anchorLink = $('#testimonials');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })

  $('#menu-contact').on('click', function() {
    var anchorLink = $('#contact');
    var offsetSize = $("nav").innerHeight();
    $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
  })
  
}); 