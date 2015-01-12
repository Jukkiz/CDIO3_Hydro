<?php
$arr = array(array('tyonro' => 'TIL057317', 'info' => 'tilauksen info', 'status' => 40), 
			array('tyonro' => 'TIL057253', 'info' => 'tilauksen info', 'status' => 40), 
			array('tyonro' => 'TIL057137', 'info' => 'tilauksen info', 'status' => 40), 
			array('tyonro' => 'TIL057136', 'info' => 'tilauksen info', 'status' => 40), 
			array('tyonro' => 'TIL056159', 'info' => 'tilauksen info', 'status' => 40)
			);

$jsonData = json_encode($arr);
			
echo $jsonData;
?>