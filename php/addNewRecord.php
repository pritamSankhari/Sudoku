<?php
include("dbcon.php");
session_start();
if(!isset($_POST)&&empty($_POST))
{
	exit;	
}
// echo "<pre>";print_r($_POST);echo "</pre>";
//echo $_POST['playtime']." ".$_POST['new-name'];

 $pname=$_POST['newname'];
 $solvetime=$_POST['stime'];
 
$sql="INSERT INTO topfiveplayer(playername,solvingtime) values('".$pname."','".$solvetime."')";
$result=$con->query($sql);

if(!$result)
{
	echo "<br><h3>Database query error</h3>";
	exit;
}

else echo "Record Saved !";

?>