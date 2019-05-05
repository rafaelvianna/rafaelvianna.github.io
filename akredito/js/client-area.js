$('.js-my-debts').on('click', function() {
  $('.js-my-debts').addClass('active');

  $('.js-payments').removeClass('active');
  $('.js-proposal').removeClass('active');
  $('.js-payments').removeClass('disabled');

  $('.debts').addClass('active');
  $('.no-accept').removeClass('active');
  $('.welcome').removeClass('active');
  $('.payments').removeClass('active');
  $('.proposal').removeClass('active');
  $('.proposal-accept').removeClass('active');
});

$('.js-payments').on('click', function() {
  $('.js-payments').addClass('active');

  $('.js-my-debts').removeClass('active');
  $('.js-proposal').removeClass('active');
  $('.js-payments').removeClass('disabled');

  $('.payments').addClass('active');
  $('.no-accept').removeClass('active');
  $('.welcome').removeClass('active');
  $('.proposal').removeClass('active');
  $('.debts').removeClass('active');
  $('.proposal-accept').removeClass('active');
});

$('.js-proposal').on('click', function() {
  $('.js-proposal').addClass('active');

  $('.js-my-debts').removeClass('active');
  $('.js-payments').removeClass('active');
  $('.js-payments').removeClass('disabled');

  $('.proposal').addClass('active');
  $('.no-accept').removeClass('active');
  $('.welcome').removeClass('active');
  $('.payments').removeClass('active');
  $('.debts').removeClass('active');
  $('.proposal-accept').removeClass('active');
});

$('.js-no-accept').on('click', function() {
  $('.js-payments').addClass('disabled');

  $('.js-my-debts').removeClass('active');
  $('.js-payments').removeClass('active');

  $('.no-accept').addClass('active');
  $('.proposal').removeClass('active');
  $('.welcome').removeClass('active');
  $('.payments').removeClass('active');
  $('.debts').removeClass('active');
  $('.proposal-accept').removeClass('active');
});


$('.js-submenu-link').on('click', function() {
  $('.js-submenu').toggleClass('active');
});