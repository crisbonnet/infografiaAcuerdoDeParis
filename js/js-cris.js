$(document).ready(function() {
    
  $('#entrar').click(function(){
    $(".fondo").slideUp();
    $(".menu-principal").fadeIn();
  
});

/*$("#circulo").hover(function() {
  $(".respuesta2").hide();
  $(".respuesta1").hide();
  $(".respuesta3").hide();
  $(".respuesta4").hide();
});
*/


$("#btn1").hover(function() {
  $(".respuesta1").show();
  $(".respuesta2").hide();
  $(".respuesta3").hide();
  $(".respuesta4").hide();
});


$("#btn1").on('click touchstart',function() {
  $(".respuesta1").show();
  $(".respuesta2").hide();
  $(".respuesta3").hide();
  $(".respuesta4").hide();
});


$("#btn2").click(function() {
  $(".respuesta2").show();
  $(".respuesta1").hide(); 
  $(".respuesta3").hide();
  $(".respuesta4").hide();
});

$("#btn2").hover(function() {
  $(".respuesta2").show();
  $(".respuesta1").hide(); 
  $(".respuesta3").hide();
  $(".respuesta4").hide();
});


$("#btn3").click(function() {
  $(".respuesta3").show();
  $(".respuesta1").hide();
  $(".respuesta2").hide();
  $(".respuesta4").hide();
});

$("#btn3").hover(function() {
  $(".respuesta3").show();
  $(".respuesta1").hide();
  $(".respuesta2").hide();
  $(".respuesta4").hide();
});


$("#btn4").click(function() {
  $(".respuesta4").show();
  $(".respuesta1").hide();
  $(".respuesta2").hide();
  $(".respuesta3").hide();
});

$("#btn4").hover(function() {
  $(".respuesta4").show();
  $(".respuesta1").hide();
  $(".respuesta2").hide();
  $(".respuesta3").hide();
  
});



});
