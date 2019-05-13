$(document).ready(function() {
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

  $('.forgot-password').click(function(e) {
    e.preventDefault();
    $('.box-login').removeClass('active');
    $('.box-recover-password').addClass('active');
    $('body').addClass('login-active');
  });

  $('.close-login').click(function(e) {
    e.preventDefault();
    $('.box-login').removeClass('active');
    $('.box-recover-password').removeClass('active');
    $('body').removeClass('login-active');
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  //busca duvidas
  $('#search').hideseek({
    nodata: 'Nenhum resultado para essa busca.'
  });

  $('.js-search').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#accordion").offset().top - 160
    }, 500);
  }) 
});