var $red = $("#red");
var $green = $("#green");
var $tagInput = $("#ingredients-input");
var listCount = 0;
var tagArray = [];

$red.click(function () {
		addTag("red");
    });

$green.click(function () {
		addTag("green");
    });

function addTag (color) {
	var input = $tagInput.val();

	if(input != ""){
		$item = $('<li id = "' + listCount + '"class = "ingredients-tag ' + color + '">' + input + ' <img class = "x" src="res/img/x.png"></li>');
		$item.click(function () {
			$(this).remove();
			removeTag($(this).html());
    	});
    	tagArray.push(input);
		$("#tag-list").append($item);
		listCount++;
		console.log(tagArray);
	}
}

function removeTag (tag) {
	var check = true;
	newTag = "";
	for(var i = 0; i < tag.length; i ++) {
		if(tag[i] == ' '){
			check = false;
		}
		if(check){
			newTag +=tag[i]
		}		
	}
	listCount--;
	var index = tagArray.indexOf(newTag);
	tagArray.splice(index, 1);
}