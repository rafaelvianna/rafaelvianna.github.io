$('.register-password').click(function () {
	const x = $('.register-input-password')[0];

	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
});

/*dirty name*/

$('.dirty-name .yes').click(function(e){
	e.preventDefault();
	$('.dirty-name .yes').addClass('active');
	$('.dirty-name .no').removeClass('active');
	$('.dirty-name .dont-know').removeClass('active');
});

$('.dirty-name .no').click(function(e){
	e.preventDefault();
	$('.dirty-name .yes').removeClass('active');
	$('.dirty-name .no').addClass('active');
	$('.dirty-name .dont-know').removeClass('active');
});

$('.dirty-name .dont-know').click(function(e){
	e.preventDefault();
	$('.dirty-name .yes').removeClass('active');
	$('.dirty-name .no').removeClass('active');
	$('.dirty-name .dont-know').addClass('active');
});


/*bad-check*/
$('.bad-check .yes').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').addClass('active');
	$('.bad-check .no').removeClass('active');
	$('.bad-check .dont-know').removeClass('active');
});

$('.bad-check .no').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').removeClass('active');
	$('.bad-check .no').addClass('active');
	$('.bad-check .dont-know').removeClass('active');
});

$('.bad-check .dont-know').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').removeClass('active');
	$('.bad-check .no').removeClass('active');
	$('.bad-check .dont-know').addClass('active');
});


/*Registry*/
$('.registry .yes').click(function(e){
	e.preventDefault();
	$('.registry .yes').addClass('active');
	$('.registry .no').removeClass('active');
	$('.registry .dont-know').removeClass('active');
});

$('.registry .no').click(function(e){
	e.preventDefault();
	$('.registry .yes').removeClass('active');
	$('.registry .no').addClass('active');
	$('.registry .dont-know').removeClass('active');
});

$('.registry .dont-know').click(function(e){
	e.preventDefault();
	$('.registry .yes').removeClass('active');
	$('.registry .no').removeClass('active');
	$('.registry .dont-know').addClass('active');
});

$('.gender .woman').click(function(e){
	e.preventDefault();
	$('.gender .woman').addClass('active');
	$('.gender .man').removeClass('active');
});

$('.gender .man').click(function(e){
	e.preventDefault();
	$('.gender .woman').removeClass('active');
	$('.gender .man').addClass('active');
});

$('.finish-first-step').click(function(e){
	e.preventDefault();
	$('.first-step').removeClass('active');
	$('.third-step').removeClass('active');
	$('.fourth-step').removeClass('active');
	$('.second-step').addClass('active');

	$('.first').removeClass('active');
	$('.third').removeClass('active');
	$('.fourth').removeClass('active');
	$('.second').addClass('active');
});

$('.finish-second-step').click(function(e){
	e.preventDefault();
	$('.first-step').removeClass('active');
	$('.third-step').addClass('active');
	$('.fourth-step').removeClass('active');
	$('.second-step').removeClass('active');

	$('.first').removeClass('active');
	$('.third').addClass('active');
	$('.fourth').removeClass('active');
	$('.second').removeClass('active');
});

$('.finish-third-step').click(function(e){
	e.preventDefault();
	$('.first-step').removeClass('active');
	$('.third-step').removeClass('active');
	$('.fourth-step').addClass('active');
	$('.second-step').removeClass('active');

	$('.first').removeClass('active');
	$('.third').removeClass('active');
	$('.fourth').addClass('active');
	$('.second').removeClass('active');
});

$('.step2-back').click(function(e){
	e.preventDefault();
	$('.first-step').addClass('active');
	$('.third-step').removeClass('active');
	$('.fourth-step').removeClass('active');
	$('.second-step').removeClass('active');

	$('.first').addClass('active');
	$('.third').removeClass('active');
	$('.fourth').removeClass('active');
	$('.second').removeClass('active');
});

$('.step3-back').click(function(e){
	e.preventDefault();
	$('.first-step').removeClass('active');
	$('.third-step').removeClass('active');
	$('.fourth-step').removeClass('active');
	$('.second-step').addClass('active');

	$('.first').removeClass('active');
	$('.third').removeClass('active');
	$('.fourth').removeClass('active');
	$('.second').addClass('active');
});

$('.step4-back').click(function(e){
	e.preventDefault();
	$('.first-step').removeClass('active');
	$('.third-step').addClass('active');
	$('.fourth-step').removeClass('active');
	$('.second-step').removeClass('active');

	$('.first').removeClass('active');
	$('.third').addClass('active');
	$('.fourth').removeClass('active');
	$('.second').removeClass('active');
});
