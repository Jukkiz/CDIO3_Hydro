<?php
$arr = array(array('WorkNumber' => 'TIL001', 'Time' => '10:20:30'),
		array('WorkNumber' => 'TIL002', 'Time' => '01:02:03'),
		array('WorkNumber' => 'TIL003', 'Time' => '00:01:02')
		);

$jsonData = json_encode($arr);
			
echo $jsonData;
?>