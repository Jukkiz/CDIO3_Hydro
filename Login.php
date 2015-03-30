<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<LINK href="style/staili.css" rel="stylesheet" type="text/css">
<title>Hydroline Login</title>
</head>
<body>
<div class="container">
	<img src="images/hydro_logo.png">
		<div class="form_info">
			<form action="Validation.php" method="post">
				<div class="header"><h4>Login</h4></div>
						<p class="account">
						<!--	<label for="account">Tunnus </label> <br/> -->
							<input type="text" name="account" placeholder="Tunnus"/>
						</p>
						<p class="password">
						<!--	<label for="password">Salasana </label> <br/> -->
							<input type="password" name="password" placeholder="Salasana"/></p>
						<br/>
						<p class="submit">
							<input type="submit" value="Kirjaudu" name="login">
						</p>
						<?php 
							if (isset($_GET["error"])){
								echo "<p class='danger'>Kirjautuminen ei onnistunut.</p>";
							}
						?>	
			</form>
		</div>
	</div>
</body>
</html>