$("#saved-by-me").show();
$("#remember").hide();
$("#rated").hide();

$(".ln-button1").click(function () {
		console.log("sdfsadflkj");
		$("#saved-by-me").show();
		$("#remember").hide();
		$("#rated").hide();
    });

$(".ln-button2").click(function () {
		$("#saved-by-me").hide();
		$("#remember").show();
		$("#rated").hide();
    });

function addRecipeToList (listId, recipeName, idCount) {
	var $list = $("#" + listId);

	var $listItem = $('<li id = "id' +idCount+ '"><img class="medium-image" src="res/img/foodtest.jpg"> </li>');
	var $listTitle = $('<h4 id = "title" class="center">' + recipeName + '</h4>');
	var $listButton = $('<button id = "edit' + idCount +'">Löschen</button>');

	$listButton.click(function () {
		$($(this).parent()).remove();
		localStorage.setItem($($(this).parent()).attr("id"), -1);
    });

	$listItem.append($listTitle);
	$listItem.append($listButton);

	$list.append($listItem)
}

function fillList() {
	var idCounter;
	if(localStorage.getItem("idCount") != null) {
		console.log("filling list" + localStorage.getItem("idCount"));
		idCounter = localStorage.getItem("idCount");
		for(var i = 0; i <= idCounter; i++) {
			if(localStorage.getItem("id" + i) != -1){
				addRecipeToList("rem", '<a href="recipe.html?id='+ localStorage.getItem("id" + i) + '">' + localStorage.getItem("idTitle" + i) + '</a>', i);
			}			
		}
	}
}

fillList();