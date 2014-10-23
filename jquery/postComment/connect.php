<?php

$con = mysql_connect("localhost","root","");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}

mysql_select_db("comments", $con);

$result = mysql_query("SELECT id, name, comment, date FROM user_comment ORDER BY id ASC");
?>