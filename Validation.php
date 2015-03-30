<?php
session_start();
if (isset($_POST["login"]))
{
	if (empty($_POST['account']) || empty($_POST['password']))
	{
		Header ( "Location: Login.php?error");
	}
	else
	{
		$account = $_POST["account"];
		$password = $_POST["password"];
		
		if ($account== "sonja" && $password == "salasana"){
			$_SESSION["user"] = $account;
			header ("Location: Index.php" );
		}
		else {
			Header ( "Location: Login.php?error");
		}
	}	
}
 ?>