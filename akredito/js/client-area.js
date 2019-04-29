$('.js-my-debts').on('click', function() {
  $('.js-my-debts').addClass('active');

  $('.js-payments').removeClass('active');
  $('.js-proposal').removeClass('active');

  $('.debts').addClass('active');
  $('.welcome').removeClass('active');
  $('.payments').removeClass('active');
  $('.proposal').removeClass('active');
});

$('.js-payments').on('click', function() {
  $('.js-payments').addClass('active');

  $('.js-my-debts').removeClass('active');
  $('.js-proposal').removeClass('active');

  $('.payments').addClass('active');
  $('.welcome').removeClass('active');
  $('.proposal').removeClass('active');
  $('.debts').removeClass('active');

});

$('.js-proposal').on('click', function() {
  $('.js-proposal').addClass('active');

  $('.js-my-debts').removeClass('active');
  $('.js-payments').removeClass('active');

  $('.proposal').addClass('active');
  $('.welcome').removeClass('active');
  $('.payments').removeClass('active');
  $('.debts').removeClass('active');
});

$('.js-submenu-link').on('click', function() {
  $('.js-submenu').toggleClass('active');
});