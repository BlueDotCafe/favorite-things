$(document).ready(function() {

  $("form#blanks").submit(function() {
    event.preventDefault();

    var favorites = ["fav1", "fav2", "fav3", "fav4"];
/**
   var capItems = items.map(function(item) {
     return item.toUpperCase();
   });
   **/

  favorites.forEach(function(item) {
    var userInput = $("input#" + item).val();
    $("." + item).text(userInput.toUpperCase());
  });


  $(".story").show();

  });
});


/*
var first = $("#fav1").val();
var second = $("#fav2").val();
var third = $("#fav3").val();
var fourth = $("#fav4").val();
var fifth = $("#fav5").val();


$(".fav1").text(favs[0]);
$(".fav2").text(favs[1]);
$(".fav3").text(favs[2]);
$(".fav4").text(favs[3]);
$(".fav5").text(favs[4]);
