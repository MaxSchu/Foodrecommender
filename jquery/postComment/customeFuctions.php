<?php
function nicetime($date) { if(empty($date)) { return "No date provided"; }
$periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
$lengths = array("60","60","24","7","4.35","12","10");
$now = time();
$unix_date = strtotime($date);
if(empty($unix_date)) { return "Bad date"; }
if($now > $unix_date) {
$difference = $now - $unix_date;
$tense = "ago";
} else {
$difference = $unix_date - $now;
$tense = "from now";
}
for($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) { $difference /= $lengths[$j]; }
$difference = round($difference);
if($difference != 1) { $periods[$j].= "s"; }
return "$difference $periods[$j] {$tense}";
}

function check_email_address($email) {  if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {  return false; } $email_array = explode("@", $email); $local_array = explode(".", $email_array[0]); for ($i = 0; $i < sizeof($local_array); $i++) { if (!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) { return false; } } if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) {  $domain_array = explode(".", $email_array[1]); if (sizeof($domain_array) < 2) { return false;  } for ($i = 0; $i < sizeof($domain_array); $i++) { if (!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|([A-Za-z0-9]+))$", $domain_array[$i])) { return false; } } } return true; }

?>