var $recipeContent = $("#recipe-content");
var $ingredientsContent = $("#ingredients-content");
var $votesContent = $("#votes-content");

$ingredientsContent.hide();
$votesContent.hide();

$("#recipe-button").click(function () {
		$recipeContent.show();
		$ingredientsContent.hide();
		$votesContent.hide();
    });

$("#ingredients-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.show();
		$votesContent.hide();
    });
$("#votes-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.hide();
		$votesContent.show();
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

function initialiseRecipe(name, recipe) {
	$("#recipe-description").html(recipe);
	$("#recips-title").html(name);
}