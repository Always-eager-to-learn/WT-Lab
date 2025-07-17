<html>
<head>
	<title>Database connection</title>
	<style>
		body{
			font-family: 'Trebuchet MS';
			font-size: 1.3rem;
		}
	</style>
</head>
<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$connection = new mysqli($servername, $username, $password);
	
	if($connection -> connect_error)
		die("Connection Failed" .$connection->connect_error);

	echo "<p>Connected successfully.</p>";

	$sql = 'create database registerinformation;';
	if(mysqli_query($connection, $sql)) {
		echo "<p>Database created successfully.</p>";
		$connection = mysqli_connect($servername, $username, $password, "registerinformation");
		if(!$connection)
			die("<p>Connection Failed: " .mysqli_connect_error());

		echo "<p>Connected successfully with the table register information.</p>";

		$query = "create table Guests(name varchar(30) not null, password varchar(30) not null);";
		
		if(mysqli_query($connection, $query)) {
			echo "<p>Table Guests created successfully</p>";
			$query = "insert into Guests values('Maya', 'openup'), ('Talon', 'talonxyz'), ('Srisa', 'srisa1234');";
			if(mysqli_query($connection, $query))
				echo "<p>New Record created successfully</p>";

			else
				echo "Error: " .$sql . " " .mysqli_error($connection);

			mysqli_close($connection);
		}
		else {
			echo "<p>Table Guests wasn't created successfully.<br>Please try again</p>";
		}
	}
	else 
		echo "<p>An error occured please try again.</p>";

?>
</html>