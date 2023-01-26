var element1 = document.getElementById('text-phone');
var maskOptions1 = {
    mask: '+7 ( 0 0 0 ) 0 0 0 - 0 0 - 0 0',
    lazy: false
} 
var mask1 = new IMask(element1, maskOptions1);

var lazyMask = IMask(
    document.getElementById('date-selection-from'),
    {
      mask: Date,
      lazy: false,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1900, to: 2999, maxLength: 4}
      }
    }
  );

  var lazyMask = IMask(
    document.getElementById('сhoosing-a-date-before'),
    {
      mask: Date,
      lazy: false,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1900, to: 2999, maxLength: 4}
      }
    }
  );
