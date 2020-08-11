$(document).ready(function() {
  $("#change-mode").click(function() {
    $("body").toggleClass("dark-mode");
  });

  $("p").click(function() {
    $(this).toggleClass("paragraph-border");
    $("p").not(this).removeClass("paragraph-border");
  });
});


/* 
  $("p").click(function() {
    $(this).toggleClass("paragraph-border");
  }); */