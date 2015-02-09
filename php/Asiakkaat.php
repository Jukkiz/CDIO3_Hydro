<?php
require_once("db.inc");

if(isset($_GET['client']))
{
	$client = $_GET['client'];
}
else
{
	$client = ""; //Jos ei olla annettu haettavan asiakkaan nimeä, haetaan kaikki
}

$result = $conn->prepare("SELECT Count(clientorder.ClientID) AS Orders, Name FROM client
						LEFT JOIN clientorder ON clientorder.ClientID = client.ClientID
						WHERE Name LIKE :name
						GROUP BY Name");
$result->execute(array(':name' => '%'.$client.'%')); //Haetaan ne asiakkaat, joiden nimi sisältää haetun nimen

$result2 = $conn->prepare("SELECT Count(*) FROM clientorder WHERE ClientID = :cID");

$arr = array();

while($r = $result->fetch(PDO::FETCH_ASSOC))
{
	$arr[] = $r;
	//echo json_encode($r);
}

$JSONdata = json_encode($arr);
echo $JSONdata;
//print_r($arr);
?>