<?php  include "connect.php"; include "customeFuctions.php";


if($_POST){

$name = $_POST['name'];
$name = trim($name, "\r\x0B\n\t\0 ");
$name = ltrim($name, "\r\x0B\n\t\0 ");
$name = rtrim($name, "\r\x0B\n\t\0 ");
$name = preg_replace('/\s\s+/', ' ', $name);
$name = strip_tags($name);

$email = $_POST['email'];
$email = trim($email, "\r\x0B\n\t\0 ");
$email = ltrim($email, "\r\x0B\n\t\0 ");
$email = rtrim($email, "\r\x0B\n\t\0 ");
$email = preg_replace('/\s\s+/', ' ', $email);
$email = strip_tags($email);

$comment = $_POST['comment'];
$comment = trim($comment, "\r\x0B\n\t\0 ");
$comment = ltrim($comment, "\r\x0B\n\t\0 ");
$comment = rtrim($comment, "\r\x0B\n\t\0 ");
$comment = preg_replace('/\s\s+/', ' ', $comment);
$comment = strip_tags($comment);


if(check_email_address($email)){  

if(strlen($name) > 35 || strlen($name) < 3 || strlen($email) > 70 || strlen($email) < 3 || strlen($comment) < 3 || strlen($comment) > 500){
}else{
mysql_query("INSERT INTO `user_comment` (`id` ,`name` ,`email` ,`comment` ,`date`) VALUES (NULL , '$name', '$email', '$comment', CURRENT_TIMESTAMP);");

$sendCopyToEmail = $_POST['sendCopyToEmail'];
$sendCopyToEmail = strip_tags($sendCopyToEmail);

if($sendCopyToEmail == "yes"){ 

$to = "$email";
$subject = "Your Comment";
$message = "$comment \n\n http://www.coldcast.co.uk";
$from = "testScript@codiacz.com";
$headers = "From: $from";
mail($to,$subject,$message,$headers);
}
}
}
}


/*
if($statusProgress == "save"){
if($status == "" || ($status == $row['status'])) {$date = "";}else{
if($row['status'] == ""){
mysql_query("insert `mystatus`.`status` SET `status` = '$status',`date` = NOW( ) ;");
}else{
mysql_query("UPDATE `mystatus`.`status` SET `status` = '$status' ORDER BY `status`.`id` DESC LIMIT 1 ;");
}
}
}
}
*/
?>