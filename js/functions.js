/* VALIDATE FORM */
(function () {
  'use strict';
  window.addEventListener('load', function () {
    var form = document.getElementById('needs-validation');
    if(form != null){
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);   
    }
  }, false);
})();



/* CURATOR INSTAGRAM */
(function(){
  var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
  i.src = "https://cdn.curator.io/published/d7429e65-f4bb-450f-af7e-6f8f5bf1.js";
  e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();



/* IE11 CARD IMAGE BUG FIX */
$(function(){
      if(navigator.userAgent.match(/Trident\/7\./)) {
          $('.card').addClass('d-block');
     }
});