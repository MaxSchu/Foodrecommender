var $philoText = $("#philo-text");
var $contactText = $("#contact-text");
var $impressumText = $("#impressum-text");



$contactText.hide();
$impressumText.hide();


$("#aboutus").click(function () {
		$philoText.show();
		$contactText.hide();
		$impressumText.hide();
    });

$("#contact").click(function () {
        $philoText.hide();
		$contactText.show();
		$impressumText.hide();
    });

$("#impressum").click(function () {
        $philoText.hide();
		$contactText.hide();
		$impressumText.show();
    });

