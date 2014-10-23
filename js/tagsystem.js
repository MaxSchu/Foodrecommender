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
	if(input != "" && checkList(input)){
		$tagInput.removeClass("red-border");
		$item = $('<li id = "' + listCount + '"class = "ingredients-tag ' + color + '">' + input + ' <img class = "x" src="res/img/x.png"></li>');
		$item.click(function () {
			$(this).remove();
			removeTag($(this).html());
    	});
    	tagArray.push(input);
		$("#tag-list").append($item);
		updateLocalStorage();
		listCount++;
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
	updateLocalStorage();
}

function checkList (input) {
	if(tagArray.indexOf(input) == -1) {
		return true;
	}else{
		return false;
	}
}

console.log(document.location.href.match(/[^\/]+$/)[0]);

function updateLocalStorage() {
	if(document.location.href.match(/[^\/]+$/)[0] == "profile.html"){
		localStorage.setItem("taglist", JSON.stringify(tagArray));
	}
	console.log(localStorage.getItem("taglist"));
}

