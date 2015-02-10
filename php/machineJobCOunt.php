<?php
require_once("db.inc");

$result = $conn->prepare("SELECT GroupID, COUNT(*) AS JobCount FROM workphase WHERE StartTime IS NOT NULL AND FinishTime IS NULL GROUP BY GroupID");
$result->execute();
$array ;

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$array[] = $r;
}

$JSONdata = json_encode($array);
echo $JSONdata;

?>