 var myElement = {};
 document.addEventListener("DOMContentLoaded", function () {
     myElement = document.getElementById('myElement');
     myElement.addEventListener('form.element.message', function (e) {
         console.log('message: ' + e.detail.message);
     });


 });

 function doclick() {
     myElement.handleOutSideClick();
 };