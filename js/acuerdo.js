
  $(document).ready(function() {
    
    $('#molinol').click(function(){
      $(".accion1").fadeIn();
      $(".ilustracion1").fadeIn();

      $(".ilustracion0").hide();
      $(".tarjeta-intro").hide();
      $(".ilustracion2").hide();
      $(".accion2").hide();
      $(".ilustracion3").hide();
      $(".accion3").hide();
      $(".ilustracion4").hide();
      $(".accion4").hide();
      $(".ilustracion5").hide();
      $(".accion5").hide(); 

  });

  $('#revision').click(function(){
    $(".accion2").fadeIn();
    $(".ilustracion2").fadeIn();

    $(".ilustracion0").hide();
    $(".tarjeta-intro").hide();
    $(".ilustracion1").hide();
    $(".accion1").hide();
    $(".ilustracion3").hide();
    $(".accion3").hide();
    $(".ilustracion4").hide();
    $(".accion4").hide();
    $(".ilustracion5").hide();
    $(".accion5").hide(); 

});

$('#temperatura').click(function(){
  $(".accion3").fadeIn();
  $(".ilustracion3").fadeIn();

  $(".ilustracion0").hide();
  $(".tarjeta-intro").hide();
  $(".ilustracion2").hide();
  $(".accion2").hide();
  $(".ilustracion1").hide();
  $(".accion1").hide();
  $(".ilustracion4").hide();
  $(".accion4").hide();
  $(".ilustracion5").hide();
  $(".accion5").hide(); 

});

$('#co2').click(function(){
  $(".accion4").fadeIn();
  $(".ilustracion4").fadeIn();

  $(".ilustracion0").hide();
  $(".tarjeta-intro").hide();
  $(".ilustracion1").hide();
  $(".accion1").hide();
  $(".ilustracion3").hide();
  $(".accion3").hide();
  $(".ilustracion5").hide();
  $(".accion5").hide();
  $(".ilustracion2").hide();
  $(".accion2").hide(); 

});

$('#fondos').click(function(){
  $(".accion5").fadeIn();
  $(".ilustracion5").fadeIn();

  $(".ilustracion0").hide();
  $(".tarjeta-intro").hide();
  $(".ilustracion2").hide();
  $(".accion2").hide();
  $(".ilustracion3").hide();
  $(".accion3").hide();
  $(".ilustracion4").hide();
  $(".accion4").hide();
  $(".ilustracion1").hide();
  $(".accion1").hide(); 

});

$("#fondos").on("tap",function(){
  $('.temperatura').hide();
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

