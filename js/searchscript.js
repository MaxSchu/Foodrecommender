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
	console.log(checkList(input));
	if(input != "" && checkList(input)){
		$tagInput.removeClass("red-border");
		$item = $('<li id = "' + listCount + '"class = "ingredients-tag ' + color + '">' + input + ' <img class = "x" src="res/img/x.png"></li>');
		$item.click(function () {
			$(this).remove();
			removeTag($(this).html());
    	});
    	tagArray.push(input);
		$("#tag-list").append($item);
		listCount++;
		console.log(tagArray);
	}else {
		$tagInput.addClass("red-border");
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

function checkList (input) {
	if(tagArray.indexOf(input) == -1) {
		return true;
	}else{
		return false;
	}
}

$("#send").click(function () {
		
    });


//UI Steuerung
$("#result-list").show();
$("#advanced-search").hide();

$(".ln-button1").click(function () {
		$("#result-list").show();
		$("#advanced-search").hide();
    });

$(".ln-button2").click(function () {
		$("#result-list").hide();
		$("#advanced-search").show();
    });