<?php
$arr = array(array('GroupID' => '12000',
			'Machines' => array(array('MachineID' => '12100', 'ResourceName' => 'Laite 1'),
					array('MachineID' => '12200', 'ResourceName' => 'Laite 2'),
					array('MachineID' => '12300', 'ResourceName' => 'Laite 3')),
			'Work' => array(array('WorkNumber' => 'TIL0001', 'Status' => '40'),
					array('WorkNumber' => 'TIL0002', 'Status' => '43'),
					array('WorkNumber' => 'TIL0003', 'Status' => '45')),
			));

$jsonData = json_encode($arr);
			
echo $jsonData;
?>