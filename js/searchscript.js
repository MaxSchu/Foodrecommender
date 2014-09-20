var $searchContent = $("#search-content");
var $menusearchContent = $("#menusearch-content");
var $causesearchContent = $("#causesearch-content");

$menusearchContent.hide();
$causesearchContent.hide();

$("#search-button").click(function () {
		$searchContent.show();
		$menusearchContent.hide();
		$causesearchContent.hide();
    });

$("#menusearch-button").click(function () {
		$searchContent.hide();
		$menusearchContent.show();
		$causesearchContent.hide();
    });

$("#causesearch-button").click(function () {
		$searchContent.hide();
		$menusearchContent.hide();
		$causesearchContent.show();
    });


var $leftNav = $(".left-nav");
if($leftNav != null){
	$leftNav.height($("#main-content").height()+40);
}