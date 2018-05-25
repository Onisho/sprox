jQuery(document).ready(function($){
  
  // HAMBURGER ANIMATION
  $('.navbar-toggler-icon').click(function(){
    $(this).toggleClass('open');
  });
  
  // EXTERNAL LINKS
  $("a[rel=external]").click(function() {
    window.open($(this).attr('href'));
    return false;
  });
  
  // FORM VALIDATION
  
  
  
  
});