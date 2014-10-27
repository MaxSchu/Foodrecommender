var query = "";

function getAdvancedSearchParameters() {
	query = $("#search-input").val();
	var tagArray = getTagList();
	var colorArray = getColorList();
	if(tagArray.length > 0){
		for(var i = 0; i < tagArray.length; i++) {
			if(colorArray[i] == "red"){
				query+= " - " + tagArray[i];
			}
			if(colorArray[i] == "green"){
				query+= " + " + tagArray[i];
			}
		}
	}
	if($("#vg").is(":checked")){

		query+= " + vegan:true";
	}
	if($("#vgt").is(":checked")){
		query+= " + vegetarian:true";
	}
	if($("#pork").is(":checked")){
		query+= " + pork:false";
	}
	if($("#beef").is(":checked")){
		query+= " + beef:false";
	}
	if($("#alc").is(":checked")){
		query+= " + antialc:true";
	}

	if($("#easy").is(":checked")){
		query+= " + req_skill:0";
	}
	if($("#med").is(":checked")){
		query+= " + req_skill:25";
	}
	if($("#dif").is(":checked")){
		query+= " + req_skill:[50 TO 75]";
	}

	if($("#low").is(":checked")){
		query+= " + time_cook:[0 TO 19]";
	}
	if($("#mid").is(":checked")){
		query+= " + time_cook:[20 TO 40]";
	}
	if($("#high").is(":checked")){
		query+= " + time_cook:[41 TO 90]";
	}

	console.log(query);
	return query;
}


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


$("#send").click(function () {
		doTheSearch(getAdvancedSearchParameters());
		$("#result-list").show();
		$("#advanced-search").hide();
    });
