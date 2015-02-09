<?php
require_once("db.inc");

$result = $conn->prepare("SELECT COUNT(*) AS AreasWorks  FROM workphase WHERE WorkPhase.StartTime IS NOT NULL AND WorkPhase.FinishTIme IS NULL AND WorkPhase.GroupID IN (12111, 12131, 12132, 12141, 12121, 12122, 12211, 12112 )");
$result->execute(array());
$TopLeftWorks ;

$result2 = $conn->prepare("SELECT COUNT(*) AS LateWorks  FROM workphase WHERE (( NOW() > WorkPhase.End AND WorkPhase.FinishTIme IS NULL) OR ( NOW() > WorkPhase.Start AND WorkPhase.StartTIme IS NULL )) AND WorkPhase.GroupID IN (12111, 12131, 12132, 12141, 12121, 12122, 12211, 12112 )");
$result2->execute(array());

$rWorks = $result->fetch(PDO::FETCH_ASSOC);
$rLate = $result2->fetch(PDO::FETCH_ASSOC);
$TopLeftWorks = $rWorks + $rLate;


$result = $conn->prepare("SELECT COUNT(*) AS AreasWorks  FROM workphase WHERE WorkPhase.StartTime IS NOT NULL AND WorkPhase.FinishTIme IS NULL AND WorkPhase.GroupID IN (12311, 12341, 12331, 12321, 12332, 12342, 12343 )");
$result->execute(array());
$BottomLeftWorks = array();

$result2 = $conn->prepare("SELECT COUNT(*) AS LateWorks  FROM workphase WHERE (( NOW() > WorkPhase.End AND WorkPhase.FinishTIme IS NULL) OR ( NOW() > WorkPhase.Start AND WorkPhase.StartTIme IS NULL )) AND WorkPhase.GroupID IN (12311, 12341, 12331, 12321, 12332, 12342, 12343 )");
$result2->execute(array());

$rWorks = $result->fetch(PDO::FETCH_ASSOC);
$rLate = $result2->fetch(PDO::FETCH_ASSOC);
	
$BottomLeftWorks = $rWorks + $rLate;


$result = $conn->prepare("SELECT COUNT(*) AS AreasWorks  FROM workphase WHERE WorkPhase.StartTime IS NOT NULL AND WorkPhase.FinishTIme IS NULL AND WorkPhase.GroupID IN (12221, 12231, 12241 )");
$result->execute(array());
$TopRightWorks = array();

$result2 = $conn->prepare("SELECT COUNT(*) AS LateWorks  FROM workphase WHERE (( NOW() > WorkPhase.End AND WorkPhase.FinishTIme IS NULL) OR ( NOW() > WorkPhase.Start AND WorkPhase.StartTIme IS NULL )) AND WorkPhase.GroupID IN (12221, 12231, 12241 )");
$result2->execute(array());

$rWorks = $result->fetch(PDO::FETCH_ASSOC);
$rLate = $result2->fetch(PDO::FETCH_ASSOC);
	
$TopRightWorks = $rWorks + $rLate;


$result = $conn->prepare("SELECT COUNT(*) AS AreasWorks  FROM workphase WHERE WorkPhase.StartTime IS NOT NULL AND WorkPhase.FinishTIme IS NULL AND WorkPhase.GroupID IN (12251, 12252, 12510, 12520, 12271, 12930, 12281, 12920, 12912, 12911 )");
$result->execute(array());
$BottomRightWorks = array();

$result2 = $conn->prepare("SELECT COUNT(*) AS LateWorks  FROM workphase WHERE (( NOW() > WorkPhase.End AND WorkPhase.FinishTIme IS NULL) OR ( NOW() > WorkPhase.Start AND WorkPhase.StartTIme IS NULL )) AND WorkPhase.GroupID IN  (12251, 12252, 12510, 12520, 12271, 12930, 12281, 12920, 12912, 12911 )");
$result2->execute(array());

$rWorks = $result->fetch(PDO::FETCH_ASSOC);
$rLate = $result2->fetch(PDO::FETCH_ASSOC);

	
$BottomRightWorks = $rWorks + $rLate;


$arr = array('upper_right' => $TopRightWorks, 'bottom_right' => $BottomRightWorks, 'upper_left' => $TopLeftWorks, 'bottom_left' => $BottomLeftWorks );
$JSONdata = json_encode($arr);

echo $JSONdata;
?>