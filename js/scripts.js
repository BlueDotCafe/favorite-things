$(document).ready(function() {
  $(".one").hide();
  $("#input-form").submit(function() {
    event.preventDefault();

    var favs = ["first", "second", "third", "fourth", "fifth"];

      favs.forEach(function(fav) {
        var userInput = $("input#" + fav).val();
        $("." + fav).text(userInput);
      };

      $(".two").show();

      function allClear() {
    $("li").remove(".two");

    }

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
