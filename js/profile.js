$persInf = $("#personal-information");
$likeIngr = $("#like-ingredient-profile");
$dislikeIngr = $("#dislike-ingredient-profile");
$socialNetw = $("#social-network-profile");

$likeIngr.hide();
$dislikeIngr.hide();
$socialNetw.hide();

$("#personal-button").click(function () {
		$persInf.show();
		$likeIngr.hide();
		$dislikeIngr.hide();
		$socialNetw.hide();
    });

$("#i-like-button").click(function () {
		$persInf.hide();
        $likeIngr.show();
		$dislikeIngr.hide();
		$socialNetw.hide();
    });

$("#i-dont-like-button").click(function () {
		$persInf.hide();
        $likeIngr.hide();
		$dislikeIngr.show();
		$socialNetw.hide();
    });

$("#social-button").click(function () {
		$persInf.hide();
        $likeIngr.hide();
		$dislikeIngr.hide();
		$socialNetw.show();
    });