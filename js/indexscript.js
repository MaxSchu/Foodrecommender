localStorage.setItem("adv-search", "false");

$("#my-recipe").click(function () {
		window.location = "myrecipes.html";
    });
$("#profile").click(function () {
		window.location = "profile.html";
    });
$("#aboutus").click(function () {
		window.location = "aboutus.html";
    });
$("#advanced-button").click(function () {
		window.location = "search.html";
		localStorage.setItem("adv-search", "true");
    });




$(document).ready(function(){
  $('#slider1').bxSlider({
	  auto: true,
	  slideWidth: 275,
	  autoControls: true,
	  pause: 10000,
	  slideMargin: 10
	});
});