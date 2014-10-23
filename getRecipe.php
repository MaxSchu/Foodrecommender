<?php
$q = intval($_GET['q']);

$con = mysqli_connect('127.0.0.1/','root','','lovefood');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM fr_complete WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>Instructions</th>
<th>Title</th>
<th>Ingredients</th>
<th>Portion_type</th>
<th>Portion_value</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['Instructions'] . "</td>";
  echo "<td>" . $row['Title'] . "</td>";
  echo "<td>" . $row['Ingredients'] . "</td>";
  echo "<td>" . $row['Portion_value'] . "</td>";
  echo "<td>" . $row['Portion_type'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>