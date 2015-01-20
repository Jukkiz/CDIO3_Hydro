<?php
require_once("db.inc");

if(isset($_GET['item']))
{
	$item = $_GET['item'];
	$result = $conn->prepare("SELECT ItemCode FROM workcard WHERE WorkNumber LIKE :ic");
	$result->execute(array(':ic' => '%'.$item.'%'));
	$item = $result->fetchColumn();

}
else
{
	$item = "";
}

$result = $conn->prepare("SELECT WorkNumber, Info, Status1 FROM workcard WHERE ItemCode LIKE :ic");
$result->execute(array(':ic' => '%'.$item.'%'));
$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$arr[] = $r;
}

$JSONdata = json_encode($arr);
echo $JSONdata;
?>