var $red = $("#red");
var $green = $("#green");
var $tagInput = $("#ingredients-input");
var listCount = 0;
var tagArray = [];
var colorArray = [];

initTagList();

$red.click(function () {
		addTag("red", $tagInput.val(), false);
    });

$green.click(function () {
		addTag("green", $tagInput.val(), false);
    });

function addTag (color, name, init) {
	var input = name;
	if(input != "" && checkList(input) || init){
		$tagInput.removeClass("red-border");
		$item = $('<li id = "' + listCount + '"class = "ingredients-tag ' + color + '">' + input + ' <img class = "x" src="res/img/x.png"></li>');
		$item.click(function () {
			$(this).remove();
			removeTag($(this).html());
    	});

		$("#tag-list").append($item);

		if(!init){
			tagArray.push(input);
			colorArray.push(color);		
			updateLocalStorage();
			listCount++;
		}


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
	colorArray.splice(index, 1);
	updateLocalStorage();
}

function checkList (input) {
	if(tagArray.indexOf(input) == -1) {
		return true;
	}else{
		return false;
	}
}

function updateLocalStorage() {
	if(document.location.href.match(/[^\/]+$/)[0] == "profile.html"){
		localStorage.setItem("taglist", JSON.stringify(tagArray));
		localStorage.setItem("colorlist", JSON.stringify(colorArray))
		console.log("item set in ls");
	}
}

function initTagList() {

	if(localStorage.getItem("taglist") != null) {
		tagArray = JSON.parse(localStorage.getItem("taglist"));
		colorArray = JSON.parse(localStorage.getItem("colorlist"));
		console.log(tagArray);
		for(var i = 0; i < tagArray.length; i++) {
			addTag(colorArray[i], tagArray[i], true);
		}
	}
}

function getTagList() {
	return tagArray;
}

function getColorList() {
	return colorArray;
}

