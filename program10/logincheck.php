<html>
	<head>
		<title>Login Status</title>
		<style>
			body{
				font-family: 'Trebuchet MS';
				font-size: 1.3rem;
			}
			
			p{
				border: 2px solid #222222;
				padding: 5px;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<?php
			$username = $_POST['user-name'];
			$password = $_POST['password'];
			$connection = new mysqli("localhost", "root", "");
			if($connection -> connect_error)
				echo "<p>Connection with the database failed.</p>";
			else{
				if($connection -> select_db("registerinformation")){
					$query = $connection -> query("select * from guests where name='$username';");
					$duser = 'none';
					$dpassword = 'none';
					while($row = $query->fetch_assoc()){
						$duser = $row['name'];
						$dpassword = $row['password'];
					}

					if($password != $dpassword && $username == $duser)
						echo "<p>Password is incorrect. <br>Please try again.</p>";
		
					else if($password == $dpassword && $username != $duser)
						echo "<p>Username is incorrect. <br> Please try again.</p>";

					else if($password == $dpassword && $username == $duser)
						echo "<p>Welcome $username to this website.</p>";
					else
						echo "<p>Invalid user credentials.</p>";
				}
			}
		?>
	</body>
</html>