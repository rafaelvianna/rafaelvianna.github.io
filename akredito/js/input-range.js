let initialValue = 1000;
let qtdPortion = 1;

function calculaValor(divida, parcelas) {
    let final = (0.055*((divida*0.25)*1.1)) / (1-(1+0.055)**-parcelas)

    $('.final-value').text(function() {
      return `R$ ${final.toFixed(2)}`
    });
}

function inputRange1() {
    var sheet = document.createElement('style'),  
    $rangeInput = $('.range-first input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {  
    var curVal = el.value,
        val = (curVal - 1) * 10.666666667,
        style = '';
        
    var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    
    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
        style += '.range-first {background: linear-gradient(to right, #a8cf45 0%, #a8cf45 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range-first input::-' + prefs[i] + '{background: linear-gradient(to right, #a8cf45 0%, #a8cf45 ' + val + '%, #edecf5 ' + val + '%, #edecf5 100%)}';
    }

    return style;
    }

    $rangeInput.on('input', function () {
      sheet.textContent = getTrackStyle(this);

      $('.simulation-value').text(function() {
        initialValue = 1000 * $rangeInput.val();
        calculaValor(initialValue, qtdPortion);
        return `R$ ${1000 * $rangeInput.val()}`
      });
    });
}

function inputRange2() {
    var sheet = document.createElement('style'),  
    $rangeInput = $('.range-second input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {  
    var curVal = el.value,
        val = (curVal - 1) * 8.666666667,
        style = '';
        
    var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    
    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
        style += '.range-second {background: linear-gradient(to right, #a8cf45 0%, #a8cf45 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range-second input::-' + prefs[i] + '{background: linear-gradient(to right, #a8cf45 0%, #a8cf45 ' + val + '%, #edecf5 ' + val + '%, #edecf5 100%)}';
    }

    return style;
    }

    $rangeInput.on('input', function () {
      sheet.textContent = getTrackStyle(this);

      $('.partials-value').text(function() {
        qtdPortion = $rangeInput.val();

        if ($rangeInput.val() == 1 ) {
          calculaValor(initialValue, 1);
          return `${$rangeInput.val()} parcela`
        }

        calculaValor(initialValue, qtdPortion);

        return `${$rangeInput.val()} parcelas`
      });
    });
}


inputRange1();
inputRange2();
