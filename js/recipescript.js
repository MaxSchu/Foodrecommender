var $recipeContent = $("#recipe-content");
var $ingredientsContent = $("#ingredients-content");
var $votesContent = $("#votes-content");

$ingredientsContent.hide();
$votesContent.hide();

$("#recipe-button").click(function () {
		$recipeContent.show();
		$ingredientsContent.hide();
		$votesContent.hide();
		$("#ingredients-button").fadeTo(500, 0.5);
		$("#votes-button").fadeTo(500, 0.5);
		$("#recipe-button").fadeTo(500, 1);
    });

$("#ingredients-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.show();
		$votesContent.hide();
		$("#ingredients-button").fadeTo(500, 1);
		$("#votes-button").fadeTo(500, 0.5);
		$("#recipe-button").fadeTo(500, 0.5);
    });
$("#votes-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.hide();
		$votesContent.show();
		$("#ingredients-button").fadeTo(500, 0.5);
		$("#votes-button").fadeTo(500, 1);
		$("#recipe-button").fadeTo(500, 0.5);
    });

$("#recipe-button").mouseover(function () {
		$("#ingredients-button").fadeTo(0, 0.5);
		$("#votes-button").fadeTo(0, 0.5);
		$("#recipe-button").fadeTo(0, 0.8);
    });

$("#ingredients-button").mouseover(function () {
		$("#ingredients-button").fadeTo(0, 0.8);
		$("#votes-button").fadeTo(0, 0.5);
		$("#recipe-button").fadeTo(0, 0.5);
    });
$("#votes-button").mouseover(function () {
		$("#ingredients-button").fadeTo(0, 0.5);
		$("#votes-button").fadeTo(0, 0.8);
		$("#recipe-button").fadeTo(0, 0.5);
    });

$(document).ready(function(){
	$(".rating").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  decimalLength: 0 // number of decimal in the rate
	});
	$("#5-star").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  isDisabled: true,
	  decimalLength: 0 // number of decimal in the rate
	});
	$("#4-star").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  isDisabled: true,
	  decimalLength: 0 // number of decimal in the rate
	});
	$("#3-star").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  isDisabled: true,
	  decimalLength: 0 // number of decimal in the rate
	});
	$("#2-star").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  isDisabled: true,
	  decimalLength: 0 // number of decimal in the rate
	});
	$("#1-star").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  isDisabled: true,
	  decimalLength: 0 // number of decimal in the rate
	});
  });

var $leftNav = $(".left-nav");
if($leftNav != null){
	$leftNav.height($("#main-content").height()+40);
}