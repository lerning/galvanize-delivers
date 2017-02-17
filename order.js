document.addEventListener('DOMContentLoaded', function(){

// if (bTab[1].innerText === '8.99')
$('#burgerAdd').click(function(){
   $('.burgerTab').removeClass()
   $('#addyB').text((Number($('#addyB').text()) + 8.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 8.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})
$('#greenAdd').click(function(){
   $('.greenTab').removeClass()
   $('#addyG').text((Number($('#addyG').text()) + 11.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 11.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})

$('#kalAdd').click(function(){
   $('.kalTab').removeClass()
   $('#addyK').text((Number($('#addyK').text()) + 14.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 14.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})

$('#slurmAdd').click(function(){
   $('.slurmTab').removeClass()
   $('#addyS').text((Number($('#addyS').text()) + 7.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 7.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})


})

// $ ('p').on('click' function(){
//    console.log('<p> clicked, i win');
// })

// $('p').click(function(){
//    $(this).toggleClass('active')
// })
