var $leftnav = $(".left-nav");

if($(window).height()>$("#main-content").height()+100){
	$leftnav.height($(window).height()-150);
}else {
	$leftnav.height($("#main-content").height());
}

var $button1 = $(".ln-button1");
$button1.fadeTo(0, 1);
var $button2 = $(".ln-button2");
var $button3 = $(".ln-button3");
var $button4 = $(".ln-button4");
var $button5 = $(".ln-button5");

function fadeOut(exception){
	$button1.fadeTo(100, 0.7);
	$button2.fadeTo(100, 0.7);
	$button3.fadeTo(100, 0.7);
	$button4.fadeTo(100, 0.7);
	$button5.fadeTo(100, 0.7);
	exception.fadeTo(100, 1);
}

$button1.click(function () {
	fadeOut($(this));
    });

$button2.click(function () {
	fadeOut($(this));
    });
$button3.click(function () {
	fadeOut($(this));
    });
$button4.click(function () {
	fadeOut($(this));
    });

$button5.click(function () {
	fadeOut($(this));
    });


$button1.hover(
function() {
$( this ).addClass( "hover" );
}, function() {
$( this ).removeClass( "hover" );
}
);

$button2.hover(
function() {
$( this ).addClass( "hover" );
}, function() {
$( this ).removeClass( "hover" );
}
);

$button3.hover(
function() {
$( this ).addClass( "hover" );
}, function() {
$( this ).removeClass( "hover" );
}
);

$button4.hover(
function() {
$( this ).addClass( "hover" );
}, function() {
$( this ).removeClass( "hover" );
}
);

$button5.hover(
function() {
$( this ).addClass( "hover" );
}, function() {
$( this ).removeClass( "hover" );
}
);

