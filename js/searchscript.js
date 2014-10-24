var query = "";

function getAdvancedSearchParameters() {
	query = $("#search-input").val();
	var tagArray = getTagList();
	var colorArray = getColorList();
	if(tagArray.length > 0){
		for(var i = 0; i < tagArray.length; i++) {
			if(colorArray[i] == "red"){
				query+= " NOT " + tagArray[i];
			}
			if(colorArray[i] == "green"){
				query+= " AND " + tagArray[i];
			}
		}
	}
	if($("#vg").is(":checked")){

		query+= " AND vegan:true";
	}
	if($("#vgt").is(":checked")){
		query+= " AND vegetarian:true";
	}
	if($("#lakt").is(":checked")){
		query+= " AND lactose:true";
	}
	if($("#glut").is(":checked")){
		query+= " AND gluten:true";
	}
	if($("#alc").is(":checked")){
		query+= " AND alcohol:true";
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
