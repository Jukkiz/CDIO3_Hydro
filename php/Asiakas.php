<?php
require_once("db.inc");

$client = $_GET['client'];

$result = $conn->prepare("SELECT ClientID, Name FROM client WHERE Name = :name");
$result->execute(array(':name' => $client));

$rows = array();
$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$id = $r['ClientID'];
	$ClientName = $r['Name'];
	
	$result2 = $conn->prepare("SELECT OrderID FROM clientorder WHERE ClientID = :cID");
	$result2->execute(array(':cID' => $id)); //Haetaan asiakkaan tilaukset

	while($r2 = $result2->fetch(PDO::FETCH_ASSOC))
	{
		$OrderID = $r2['OrderID'];
		
		$result3 = $conn->prepare("SELECT WorkNumber, Info, Status1 FROM workcard WHERE Order1 = :oID");
		$result3->execute(array(':oID' => $OrderID)); //Haetaan tilaukseen kuuluvat työt
		
		while($r3 = $result3->fetch(PDO::FETCH_ASSOC))
		{
			$rows[] = $r3;
		}
	}	
	
	$arr[] = array('Name' => $ClientName, 'Works' => $rows);
}

$JSONdata = json_encode($arr);
echo $JSONdata;

?>