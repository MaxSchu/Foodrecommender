<?php  include "connect.php"; include "customeFuctions.php"; $limitComment = 60; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="style/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="jQuery/jQuery.js"></script>
</head>

<body>

		<div id="wrapper">
		<div id="comments">
		<?php 
		while($row = mysql_fetch_array($result)){?>
		<div id="<?php if(strlen($row['comment']) > $limitComment){echo "commentWrapperSmall";}else{echo "commentWrapper";}?>" class="<?php if(strlen($row['comment']) > $limitComment){echo "commentWrapperSmall";}else{echo "commentWrapper";}?>">
		<div id="commentTime" class="commentTime"><?php echo nicetime($row['date']); ?></div>
		<div id="commentName"><?php echo $row['name'];?></div>
		<div id="<?php if(strlen($row['comment']) > $limitComment){echo "commentCommentSmall";}else{echo "commentComment";}?>" class="<?php if(strlen($row['comment']) > $limitComment){echo "commentCommentSmall";}else{echo "commentComment";}?>"><?php if(strlen($row['comment']) > $limitComment){echo substr($row['comment'], 0, $limitComment). '... <a class="moreLess">more</a>';}else{echo $row['comment'];} ?></div>
		<?php if(strlen($row['comment']) > $limitComment){?><div class="commentCommentMore"><?php echo $row['comment']. ' <a class="moreLess">less</a>'; ?></div><?php } ?>
		</div>
		<?php } ?>
		</div>
		<div id="commentForm">
		<form>
		<table border="0">
		 
		  <tr>
			<td>Name</td>
			<td><input type="text" id="name" value="" size="27" maxlength="35" /></td>
		  </tr>
		  <tr>
			<td>Email</td>
			<td><input type="text" id="email" value="" size="27" maxlength="70" /></td>
		  </tr>
		  <tr>
			<td>Comment</td>
			<td><textarea id="comment"></textarea><div id="commentMaxChar">Number of characters left: 500</div></td>
		  </tr>
		  <tr>
		   <tr>
			<td>Send copy to email</td>
			<td><input type="checkbox" id="sendCopyToEmail" value="" /></td>
		  </tr>
		  <tr>
			<td>&nbsp;</td>
			<td><input name="button" type="button" id="saveComment" value="Post" /><img id="working" class="hide" src="img/ajax-loader.gif" alt="working.." /></td>
		  </tr>
		</table>
		<div id="error"></div>
		</form>
		</div>
		</div>

</body>
</html>
