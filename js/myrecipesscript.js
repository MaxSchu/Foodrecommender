var idCount = 0;

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

$(".ln-button3").click(function () {
		$("#saved-by-me").hide();
		$("#remember").hide();
		$("#rated").show();
    });

function addRecipeToList (listId, recipeName) {
	var $list = $("#" + listId);

	var $listItem = $('<li id = "item'+idCount+'"><img class="medium-image" src="res/img/foodtest.jpg"> </li>');
	var $listTitle = $('<h4 id = "title" class="center">' + recipeName + '</h4>');
	var $listButton = $('<button id = "edit' + idCount +'">Löschen</button>');
	idCount++;

	$listButton.click(function () {
		$($(this).parent()).remove();
    });

	$listItem.append($listTitle);
	$listItem.append($listButton);

	$list.append($listItem)
}

addRecipeToList("rem", "Recipedeleteetet");
addRecipeToList("rem", "Recipedeleteetet2");