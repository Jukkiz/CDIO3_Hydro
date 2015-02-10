<?php
require_once("db.inc");

$result = $conn->prepare("SELECT GroupID FROM `workphase` WHERE ( NOW() > WorkPhase.End AND WorkPhase.FinishTIme IS NULL AND workphase.StartTIme IS NOT NULL)");
$result->execute(array());
$array ;

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$array[] = $r;
}

$JSONdata = json_encode($array);
echo $JSONdata;

?>