document.addEventListener('DOMContentLoaded', function(){

$('#burgerAdd').click(function(){
   $('.burgerTab').toggleClass()
   $('#addyB').text((Number($('#addyB').text()) + 8.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 8.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})
$('#greenAdd').click(function(){
   $('.greenTab').toggleClass()
   $('#addyG').text((Number($('#addyG').text()) + 14.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 14.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})

$('#kalAdd').click(function(){
   $('.kalTab').toggleClass()
   $('#addyK').text((Number($('#addyK').text()) + 41.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 41.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})

$('#slurmAdd').click(function(){
   $('.slurmTab').toggleClass()
   $('#addyS').text((Number($('#addyS').text()) + 2.99).toFixed(2))
   $('#subTotal').text((Number($('#subTotal').text()) + 2.99).toFixed(2))
   $('#tax').text(((Number($('#subTotal').text()))* .08).toFixed(2))
   $('#total').text(((Number($('#subTotal').text()))+ Number($('#tax').text())).toFixed(2))
})
$('.cleary').click(function(){
   $('#subTotal').text((0.00).toFixed(2))
   $('#tax').text((0.00).toFixed(2))
   $('#total').text((0.00).toFixed(2))
   $('#addyB').text((0.00).toFixed(2))
   $('#addyG').text((0.00).toFixed(2))
   $('#addyK').text((0.00).toFixed(2))
   $('#addyS').text((0.00).toFixed(2))
})

$('.placeyPlace').click(function(){
   console.log($('#name').val());
   if ($('#name').val() === '') {
      Materialize.toast('Please Fill in your First Name', 4000, 'rounded')
   } else if ($('#phoneNumber').val() === '') {
      Materialize.toast('Please Fill in your Phone Number', 4000, 'rounded')
   } else if ($('#address').val() === '') {
      Materialize.toast('Please Fill in your Address', 4000, 'rounded')
   } else {
      Materialize.toast('Delivery has begun', 7000, 'rounded')
   }
})

})
