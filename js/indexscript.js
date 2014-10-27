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

