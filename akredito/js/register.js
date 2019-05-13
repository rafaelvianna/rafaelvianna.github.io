// import { Verify } from "crypto";

$('.register-password').click(function () {
	const x = $('.register-input-password')[0];

	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
});

$('.register-password-repeat').click(function () {
	const x = $('.register-input-password-repeat')[0];

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
	$('.dirty-name').removeClass('error');
});

$('.dirty-name .no').click(function(e){
	e.preventDefault();
	$('.dirty-name .yes').removeClass('active');
	$('.dirty-name .no').addClass('active');
	$('.dirty-name .dont-know').removeClass('active');
	$('.dirty-name').removeClass('error');

});

$('.dirty-name .dont-know').click(function(e){
	e.preventDefault();
	$('.dirty-name .yes').removeClass('active');
	$('.dirty-name .no').removeClass('active');
	$('.dirty-name .dont-know').addClass('active');
	$('.dirty-name').removeClass('error');

});


/*bad-check*/
$('.bad-check .yes').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').addClass('active');
	$('.bad-check .no').removeClass('active');
	$('.bad-check .dont-know').removeClass('active');
	$('.bad-check').removeClass('error');

});

$('.bad-check .no').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').removeClass('active');
	$('.bad-check .no').addClass('active');
	$('.bad-check .dont-know').removeClass('active');
	$('.bad-check').removeClass('error');

});

$('.bad-check .dont-know').click(function(e){
	e.preventDefault();
	$('.bad-check .yes').removeClass('active');
	$('.bad-check .no').removeClass('active');
	$('.bad-check .dont-know').addClass('active');
	$('.bad-check').removeClass('error');

});


/*Registry*/
$('.registry .yes').click(function(e){
	e.preventDefault();
	$('.registry .yes').addClass('active');
	$('.registry .no').removeClass('active');
	$('.registry .dont-know').removeClass('active');
	$('.registry').removeClass('error');

});

$('.registry .no').click(function(e){
	e.preventDefault();
	$('.registry .yes').removeClass('active');
	$('.registry .no').addClass('active');
	$('.registry .dont-know').removeClass('active');
	$('.registry').removeClass('error');

});

$('.registry .dont-know').click(function(e){
	e.preventDefault();
	$('.registry .yes').removeClass('active');
	$('.registry .no').removeClass('active');
	$('.registry .dont-know').addClass('active');
	$('.registry').removeClass('error');

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

$('.portion .yes').click(function(e){
	e.preventDefault();
	$('.portion .yes').addClass('active');
	$('.portion .no').removeClass('active');
});

$('.portion .no').click(function(e){
	e.preventDefault();
	$('.portion .yes').removeClass('active');
	$('.portion .no').addClass('active');
});



function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function validEmail(value) {  
	var valid = true;  
	var emails = value.replace(';', ',').split(",");  

	jQuery.each(emails, function () {  
		if (jQuery.trim(this) != '')  
		{  
			if (!jQuery.trim(this).match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i))  
					valid = false;  
		}  
	});  
	return valid;  
};

$('.finish-first-step').click(function(e) {
	e.preventDefault();
	const $name = $('#complete-name')[0].value;
	const $inputName = $('#complete-name');

	const $cpf = $('#cpf')[0].value;
	const $inputCpf = $('#cpf');

	const $whatsapp = $('#cellphone')[0].value;
	const $inputWhats = $('#cellphone');

	const $phone = $('#phone')[0].value;
	const $inputPhone = $('#phone');

	const $email = $('#email')[0].value;
	const $inputEmail = $('#email');

	const $password = $('#password')[0].value;
	const $inputPassword = $('#password');

	const $repeatPassword = $('#passwordRepeat')[0].value;
	const $inputRepeatPassword = $('#passwordRepeat');

	let equalPassword = '';
	
	if ($name == '' || $name.length < 3) {
		$('.complete-name').addClass('error');

		$inputName.keyup(function(e) {
			if(e.currentTarget.value.length > 3) {
				$('.complete-name').removeClass('error');
			} else {
				$('.complete-name').addClass('error');
			}
		})
	}

	if (validarCPF($cpf) === false) {
		$('.input-cpf').addClass('error');

		$inputCpf.keyup(function(e) {
			if(validarCPF(e.currentTarget.value) === true) {
				$('.input-cpf').removeClass('error');
			} else {
				$('.input-cpf').addClass('error');
			}
		})
	}

	if($whatsapp == '' || $whatsapp.length < 14) {
		$('.input-whatsapp').addClass('error');

		$inputWhats.keyup(function(e) {
			if(e.currentTarget.value.length >= 14) {
				$('.input-whatsapp').removeClass('error');
			} else {
				$('.input-whatsapp').addClass('error');
			}
		})
	}

	if($phone == '' || $phone.length < 14) {
		$('.input-phone').addClass('error');

		$inputPhone.keyup(function(e) {
			if(e.currentTarget.value.length >= 14) {
				$('.input-phone').removeClass('error');
			} else {
				$('.input-phone').addClass('error');
			}
		})
	}

	if(validEmail($email) === false || $email == '') {
		$('.input-email').addClass('error');

		$inputEmail.keyup(function(e) {
			if(validEmail(e.currentTarget.value) === true) {
				$('.input-email').removeClass('error');
			} else {
				$('.input-email').addClass('error');
			}
		})
	}

	if($password == '' || $password.length < 5) {
		$('.input-password').addClass('error');

		$inputPassword.keyup(function(e) {
			if(e.currentTarget.value.length >= 5) {
				equalPassword = e.currentTarget.value;
				$('.input-password').removeClass('error');
			} else {
				$('.input-password').addClass('error');
			}
		})
	}

	if($repeatPassword == '' || $password !== $repeatPassword) {
		$('.repeat-password').addClass('error');

		$inputRepeatPassword.keyup(function(e) {
			if(e.currentTarget.value == equalPassword) {
				$('.repeat-password').removeClass('error');
			} else {
				$('.repeat-password').addClass('error');
			}
		})
	}

	if($('.dirty-name').find('.active').length == 0) {
		$('.dirty-name').addClass('error');
	}

	if($('.bad-check').find('.active').length == 0) {
		$('.bad-check').addClass('error');
	} 

	if($('.registry').find('.active').length == 0) {
		$('.registry').addClass('error');
	}

	if($('.first-step').find('.error').length == 0) {
		$('.first-step').removeClass('active');
		$('.second-step').addClass('active');
	
		$('.first').removeClass('active');
		$('.second').addClass('active');	

		const dirtyName = $('.dirty-name .no').hasClass('active');
		const badCheck = $('.bad-check .yes').hasClass('active');
		const registry = $('.registry .yes').hasClass('active');

		if(dirtyName || badCheck || registry) {
			$('.modal-create-account-fail').addClass('active');
		}
	}
});

$('.finish-second-step').click(function(e){
	if ( $('.form-step-2')[0].checkValidity() ) {
		e.preventDefault();
		$('.first-step').removeClass('active');
		$('.third-step').addClass('active');
		$('.fourth-step').removeClass('active');
		$('.second-step').removeClass('active');

		$('.first').removeClass('active');
		$('.third').addClass('active');
		$('.fourth').removeClass('active');
		$('.second').removeClass('active');
	}
});

$('.finish-third-step').click(function(e){
	if ( $('.form-step-3')[0].checkValidity() ) {
		e.preventDefault();
		$('.first-step').removeClass('active');
		$('.third-step').removeClass('active');
		$('.fourth-step').addClass('active');
		$('.second-step').removeClass('active');

		$('.first').removeClass('active');
		$('.third').removeClass('active');
		$('.fourth').addClass('active');
		$('.second').removeClass('active');
	}
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

$('.finish-register').click(function(e) {
	if ( $('.form-step-4')[0].checkValidity() ) {
		e.preventDefault();
		$('.modal-create-account').addClass('active');
		$('body').addClass('login-active');
	}
});

$('.confirm-new-account').click(function(){
	$('body').addClass('login-active');
});

$('.confirm-new-account-fail').click(function() {
	$('body').removeClass('login-active');
});

$("#cep").focusout(function(){
	$.ajax({
		url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
		dataType: 'json',

		success: function(resposta){
			$("#logradouro").val(resposta.logradouro);
			$("#complemento").val(resposta.complemento);
			$("#bairro").val(resposta.bairro);
			$("#cidade").val(resposta.localidade);
			$("#uf").val(resposta.uf);
			$("#numero").focus();
		}
	});
});

$(".phone")
.mask("(99) 9999-99999")
.focusout(function (event) {  
		var target, phone, element;  
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
		phone = target.value.replace(/\D/g, '');
		element = $(target);  
		element.unmask();  
		if(phone.length > 10) {  
				element.mask("(99) 99999-9999");  
		} else {  
				element.mask("(99) 9999-9999");  
		}  
});