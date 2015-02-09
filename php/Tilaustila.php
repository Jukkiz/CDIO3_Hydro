<?php
require_once("db.inc");

$result = $conn->prepare("SELECT ItemCodePhase, StartTime FROM workphase 
							WHERE FinishTime IS NULL AND StartTime Is NOT NULL
							ORDER BY StartTime ASC");
$result->execute();
$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$arr[] = $r;
}

$JSONdata = json_encode($arr);
echo $JSONdata;
?>