$(document).ready(function () {

  $("#arg").click(function () {
    $(".arg").fadeIn();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-arg").click(function () {
      $(".arg").fadeOut();
      $(".basica").fadeIn();
  });

  $("#br").click(function () {
    $(".br").fadeIn();
    $(".arg").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-br").click(function () {
      $(".br").fadeOut();
      $(".basica").fadeIn();
  });


  $("#can").click(function () {
    $(".can").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-can").click(function () {
      $(".can").fadeOut();
      $(".basica").fadeIn();
  });


  $("#eeuu").click(function () {
    $(".eeuu").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-eeuu").click(function () {
      $(".eeuu").fadeOut();
      $(".basica").fadeIn();
  });


  $("#china").click(function () {
    $(".china1").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-china").click(function () {
      $(".china1").fadeOut();
      $(".basica").fadeIn();
  });


  $("#india").click(function () {
    $(".india1").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-india").click(function () {
      $(".india1").fadeOut();
      $(".basica").fadeIn();
  });


  $("#indo").click(function () {
    $(".indo").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-indo").click(function () {
      $(".indo").fadeOut();
      $(".basica").fadeIn();
  });


  $("#mx").click(function () {
    $(".mx").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
$(".peru1").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-mx").click(function () {
      $(".mx").fadeOut();
      $(".basica").fadeIn();
  });


  $("#peru").click(function () {
    $(".peru1").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".tq").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-peru").click(function () {
      $(".peru1").fadeOut();
      $(".basica").fadeIn();
  });


  $("#tq").click(function () {
    $(".tq").fadeIn();
    $(".arg").fadeOut();
 $(".br").fadeOut();
$(".can").fadeOut();
  $(".eeuu").fadeOut();
$(".china1").fadeOut();
$(".india1").fadeOut();
$(".indo").fadeOut();
 $(".mx").fadeOut();
$(".peru1").fadeOut();
$(".basica").fadeOut();
  });
    $("#cierre-tq").click(function () {
      $(".tq").fadeOut();
      $(".basica").fadeIn();
  });
  $("#cierre-gral").click(function () {
    $("#tjta-fija").fadeOut();
  });
});


//Responsive del menú
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
