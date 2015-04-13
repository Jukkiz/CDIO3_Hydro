<?php
require_once("db.inc");

if(isset($_GET['item']))
{
	$item  = '%'.$_GET['item'].'%';
}
else
{
	$item = "%%";
}

if(isset($_GET['itemPage']))
{
	$itemPage = $_GET['itemPage'];
}
else
{
	$itemPage = 0;
}

$result = $conn->prepare("SELECT WorkNumber, Info, Status1 FROM workcard WHERE ItemCode LIKE :ic LIMIT :page, 10 ");
$result->bindParam(':page', $itemPage, PDO::PARAM_INT);
$result->bindParam(':ic', $item, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 20);
$result->execute();
$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$arr[] = $r;
}

$JSONdata = json_encode($arr);
echo $JSONdata;

?>