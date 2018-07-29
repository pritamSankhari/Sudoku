<?php
include("dbcon.php");

$sql="SELECT * FROM topfiveplayer";
$result=$con->query($sql);

if(!$result)
{
	echo "<br><h3>Database query error</h3>";
	exit;
}


function getTopPlayerRow($result)
{
	$row=$result->fetch_assoc(); //fetching row as a associative array 
	if($row)
	{
		return $row;
	}
	return 0;	
}

function showPlayerName($row)
{
	if($row)
	{
		echo $row['playername']; 	//$row[coloumn name]
	}
	else echo "-";
}

function showPlayerSolvingTime($row)
{
	if($row)
	{
		echo $row['solvingtime'];
	}
	else echo "-";
}


// if($result)
// {
// 	//$row=$result->fetch_assoc(); //fetching row as a associative array 
// 	while($row=$result->fetch_assoc())
// 	{
// 		//echo "Table has data !";
// 		echo "<br>".$row['playername'];
// 	}
// 	echo "<br>No data here!";
// }
// else echo "Query Error!";
?>

<!DOCTYPE html>
<html>
<head>
	<title>Top Players</title>
</head>
<body>
	<main>
		<table>
			<tr>
				<th>Players Name</th>
				<th>Time Taken</th>
			</tr>
			<tr>
				<td>
					<?php
						$row=getTopPlayerRow($result);
						showPlayerName($row);

					?>
					
				</td>
				<td>
					<?php
						showPlayerSolvingTime($row);
					?>
				</td>
			</tr>
			<tr>
				<td>
					<?php
						$row=getTopPlayerRow($result);
						showPlayerName($row);

					?>
					
				</td>
				<td>
					<?php
						showPlayerSolvingTime($row);
					?>
				</td>
			</tr>
			<tr>
				<td>
					<?php
						$row=getTopPlayerRow($result);
						showPlayerName($row);

					?>
					
				</td>
				<td>
					<?php
						showPlayerSolvingTime($row);
					?>
				</td>
			</tr>
			<tr>
				<td>
					<?php
						$row=getTopPlayerRow($result);
						showPlayerName($row);

					?>
					
				</td>
				<td>
					<?php
						showPlayerSolvingTime($row);
					?>
				</td>
			</tr>
			<tr>
				<td>
					<?php
						$row=getTopPlayerRow($result);
						showPlayerName($row);

					?>
					
				</td>
				<td>
					<?php
						showPlayerSolvingTime($row);
					?>
				</td>
			</tr>
			
		</table>
	</main>
</body>
</html>