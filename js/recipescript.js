var $recipeContent = $("#recipe-content");
var $ingredientsContent = $("#ingredients-content");
var $equipmentContent = $("#equipment-content");
var $fotosContent = $("#fotos-content");
var $votesContent = $("#votes-content");

$("#recipe-button").click(function () {
		$recipeContent.show();
		$ingredientsContent.hide();
		$equipmentContent.hide();
		$fotosContent.hide();
		$votesContent.hide();
    });

$("#ingredients-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.show();
		$equipmentContent.hide();
		$fotosContent.hide();
		$votesContent.hide();
    });

$("#equipment-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.hide();
		$equipmentContent.show();
		$fotosContent.hide();
		$votesContent.hide();
    });

$("#fotos-buttton").click(function () {
		$recipeContent.hide();
		$ingredientsContent.hide();
		$equipmentContent.hide();
		$fotosContent.show();
		$votesContent.hide();
    });

$("#votes-button").click(function () {
		$recipeContent.hide();
		$ingredientsContent.hide();
		$equipmentContent.hide();
		$fotosContent.hide();
		$votesContent.show();
    });

$(document).ready(function(){
	$(".rating").jRating({
	  step: true,
	  length : 5, // nb of stars
	  rateMax : 5,
	  decimalLength: 0 // number of decimal in the rate
	});
  });