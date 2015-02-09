<?php
require_once("db.inc");

if(isset($_GET['item']))
{
	$item = $_GET['item'];
}
else
{
	$item = "";
}

$result = $conn->prepare("SELECT * FROM workcard WHERE WorkNumber = :ic");
$result->execute(array(':ic' => $item));
$infoArr = array();
$WorksPathArray = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$ItemCode = $r['ItemCode'];
	$infoArr[] = $r;
}

if(isset($_GET['item']))
{
	$result = $conn->prepare("SELECT * FROM `workphase` WHERE ItemCodePhase = :ic");
	$item = $ItemCode; 
	$result->execute(array(':ic' => $item));
	
	
	while($r = $result->fetch(PDO::FETCH_ASSOC))
	{
		$WorksPathArray[] = $r;
	}
}
$arr = array("infos" => $infoArr , "Path" => $WorksPathArray);


$JSONdata = json_encode($arr);
echo $JSONdata;
?>