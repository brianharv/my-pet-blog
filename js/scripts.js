$(document).ready(function() {
  $("#change-mode").click(function() {
    $("body").toggleClass("dark-mode");
  });

  $("p").click(function() {
    $(this).toggleClass("paragraph-border");
  });
});

