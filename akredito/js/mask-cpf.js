const cpfMask = function (val) {
    return val.replace(/\D/g, '').length > 11 ? '000.000.000-09' : '000.000.000-09';
 },
 cpfOptions = {
    onKeyPress: function(val, e, field, options) {
       field.mask(cpfMask.apply({}, arguments), options);
    }
 };

 $('.cpf-mask').mask(cpfMask, cpfOptions);
