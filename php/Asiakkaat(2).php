<?php
require_once("db.inc");

if(isset($_GET['client']))
{
	$client = $_GET['client'];
}
else
{
	$client = "	"; //Jos ei olla annettu haettavan asiakkaan nimeä, haetaan kaikki
}

$result = $conn->prepare("SELECT ClientID, Name FROM client WHERE Name LIKE :name");
$result->execute(array(':name' => '%'.$client.'%')); //Haetaan ne asiakkaat, joiden nimi sisältää haetun nimen

$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$id = $r['ClientID'];
	$ClientName = $r['Name'];
	
	$result2 = $conn->prepare("SELECT Count(*) FROM clientorder WHERE ClientID = :cID");
	$result2->execute(array(':cID' => $id)); //Haetaan asiakkaan tilausten lkm

	$r2 = $result2->fetch(PDO::FETCH_ASSOC);
	
	$OrderCount = $r2['Count(*)'];

	$arr[] = array('Orders' => $OrderCount, 'Name' => $ClientName);
	
}

$JSONdata = json_encode($arr);
echo $JSONdata;

?>