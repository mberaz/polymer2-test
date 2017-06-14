 var myElement = {};
 document.addEventListener("DOMContentLoaded", function () {
     myElement = document.getElementById('myElement');
     myElement.addEventListener('form.element.message', function (e) {
         document.getElementById('mesagespan').innerHTML=e.detail.message
     });


 });

 function doclick() {
     myElement.handleOutSideClick();
 };