$("#my-recipe").click(function () {
		window.location = "myrecipes.html";
    });
$("#profile").click(function () {
		window.location = "profile.html";
    });
$("#most-wanted").click(function () {
		window.location = "recipe.html";
    });
$("#aboutus").click(function () {
		window.location = "aboutus.html";
    });

$("#search").keyup(function(e){
    if(e.keyCode == 13)
    {
        window.location = "search.html";
        localStorage.setItem("quicksearch", $(this).val());
    }
});