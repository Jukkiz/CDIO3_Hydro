<?php
$arr = array(array('nimi' => 'Antti Asiakas', 'tilaustenlkm' => 2), 
			array('nimi' => 'Joulupukki', 'tilaustenlkm' => 5), 
			array('nimi' => 'Aku Ankka', 'tilaustenlkm' => 313), 
			array('nimi' => 'Esimerkki Asiakas', 'tilaustenlkm' => 1), 
			array('nimi' => 'Etunimi Sukunimi', 'tilaustenlkm' => 10)
			);

$jsonData = json_encode($arr);
			
echo $jsonData;
?>