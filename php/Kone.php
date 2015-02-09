<?php
require_once("db.inc");

if(isset($_GET['machine']))
{
	$group = $_GET['machine'];
	$result = $conn->prepare("SELECT GroupID FROM Resource WHERE MachineID LIKE :group");
	$result->execute(array(':group' => '%'.$group.'%'));
	
	$r = $result->fetch(PDO::FETCH_ASSOC);
	$group = $r['GroupID'];
}
else
{
	$group = ""; //Jos ei olla annettu haettavan koneryhmän nimeä, haetaan kaikki
}

$machines = array();
$works = array();

$result = $conn->prepare("SELECT MachineID, ResourceName FROM Resource WHERE GroupID LIKE :group");
$result->execute(array(':group' => '%'.$group.'%')); //Haetaan ne koneryhmät, joiden nimi sisältää haetun nimen

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$m_id = $r['MachineID'];
	$r_name = $r['ResourceName'];
	$machines[] = array('MachineID' => $m_id, 'ResourceName' => $r_name);
}

$result2 = $conn->prepare("SELECT WorkCard.WorkNumber, WorkCard.Status1 FROM WorkPhase INNER JOIN WorkCard ON WorkPhase.ItemCodePhase = WorkCard.ItemCode INNER JOIN Resource ON WorkPhase.GroupID = Resource.MachineID WHERE Resource.GroupID LIKE :group");

$result2->execute(array(':group' => '%'.$group.'%'));
while($r2 = $result2->fetch(PDO::FETCH_ASSOC))
{
	$worknumber = $r2['WorkNumber'];
	$status = $r2['Status1'];
	$works[] = array('WorkNumber' => $worknumber, 'Status' => $status);
}

$arr = array(array('GroupID' => $group, 'Machines' => $machines, 'Work' => $works));
$JSONdata = json_encode($arr);

echo $JSONdata;
?>