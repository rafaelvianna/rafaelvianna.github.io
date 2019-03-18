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

$('.icon-password').click(function() {
  const x = $('.input-password')[0];
  
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
});

$('.login').click(function(e) {
  e.preventDefault();
  $('.box-login').addClass('active');
  $('body').addClass('login-active');
});

$('.close-login').click(function(e) {
  e.preventDefault();
  $('.box-login').removeClass('active');
  $('body').removeClass('login-active');
});

$('.question-open').click(function(){
  $('.questions-item-hide').addClass('active');
  $('.question-open').addClass('questions-item-hide');
});

$('.questions-item-hide').click(function(){
  $('.questions-item-hide').removeClass('active');
  $('.question-open').removeClass('questions-item-hide');
});