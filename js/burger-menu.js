// Control burger menu on mobile devices
$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".mobile-menu-links" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".mobile-menu-links" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".mobile-menu-links" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
});
