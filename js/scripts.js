$('.hide-show').on('click', function(){
  $('.opened').toggleClass('hide');
  $('.content-container').toggleClass('biggest-container');
});

$('.menu').on('click', function(){
  $('.opened').toggleClass('active');
});