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
		query+= " + pork:true";
	}
	if($("#beef").is(":checked")){
		query+= " + beef:true";
	}
	if($("#alc").is(":checked")){
		query+= " + antialc:true";
	}

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
