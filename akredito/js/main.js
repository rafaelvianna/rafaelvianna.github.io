$('.menu a').on('click', function(){
    $('nav .menu ul').removeClass('menu-active');
    $('.menu-open').removeClass('hide');
    $('.menu-close').addClass('hide');
    $('body').removeClass('body-fixed');
  });

  $('.menu-open').on('click', function() {
    $('nav .menu ul').addClass('menu-active');
    $('.menu-open').addClass('hide');
    $('.menu-close').removeClass('hide');
    $('body').addClass('body-fixed');
  });

  $('.menu-close').on('click', function() {
    $('nav .menu ul').removeClass('menu-active');
    $('.menu-open').removeClass('hide');
    $('.menu-close').addClass('hide');
    $('body').removeClass('body-fixed');
  });