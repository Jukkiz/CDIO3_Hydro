<?php
$arr = array(array('asiakasnumero' => '12345', 'nimi' => 'Aku Ankka', 
					'tyot' => array(array('tyonro' => 'TIL057317', 'info' => 'tilauksen info', 'status' => 40), 
									array('tyonro' => 'TIL057253', 'info' => 'tilauksen info', 'status' => 40))), 
			array('asiakasnumero' => '54321', 'nimi' => 'Joulupukki', 
					'tyot' => array(array('tyonro' => 'TIL057137', 'info' => 'tilauksen info', 'status' => 40), 
									array('tyonro' => 'TIL057136', 'info' => 'tilauksen info', 'status' => 40))), 
			array('asiakasnumero' => '98765', 'nimi' => 'Esimerkki Asiakas', 
					'tyot' => array(array('tyonro' => 'TIL056159', 'info' => 'tilauksen info', 'status' => 40), 
									array('tyonro' => 'VAR038156', 'info' => 'tilauksen info', 'status' => 40)))
			);

$jsonData = json_encode($arr);
			
echo $jsonData;
?>