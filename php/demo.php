<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php
	//COPY PASTE TAIVAS HEHEE! miksi mää tän näin tein!
	require_once("db.inc");
	$curdate = date('Y-m-d H:i:s');
	$lisays = $conn->prepare("DELETE FROM `client` WHERE 1");
	$lisays->execute();	
	$lisays = $conn->prepare("DELETE FROM `ClientOrder` WHERE 1");
	$lisays->execute();	
	$lisays = $conn->prepare("DELETE FROM `workcard` WHERE 1");
	$lisays->execute();	
	$lisays = $conn->prepare("DELETE FROM `workphase` WHERE 1");
	$lisays->execute();	
	
	//Lisätään asiakas ja 2 tilausta!
	$lisays = $conn->prepare("INSERT INTO Client (ClientID, Name) VALUES('1', 'Savonia')");
	$lisays->execute();	
	
	//Lisätään ensimmäinen tilaus asiakkaalle!
	$lisays = $conn->prepare("INSERT INTO ClientOrder (OrderID, BasicAmount, DueDate, ClientID) VALUES('1', '10', '2015-3-11', '1')");
	$lisays->execute();
	
	//Tilauksen WorkCard
	$lisays = $conn->prepare("INSERT INTO workcard (WorkNumber, ItemCode, Order1, Status1,StartPlan, EndPlan) VALUES('TIL057317', '1TAMSY310', '1', '40', '2015-2-10','2015-2-11')");
	$lisays->execute();
	
	//Tilauksen WorkPhaset!
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247407', '1TAMSY310', '1', '1TAMSY310 / Kuvaus työstä', '60', '12132', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+2 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247408', '1TAMSY310', '2', '1TAMSY310 / Kuvaus työstä', '60', '12341', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+2 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247409', '1TAMSY310', '5', '1TAMSY310 / Kuvaus työstä', '60', '12930', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+2 days')) ));
	
	//Toinen tilaus
	$lisays = $conn->prepare("INSERT INTO ClientOrder (OrderID, BasicAmount, DueDate, ClientID) VALUES('2', '15', '2015-3-11', '1')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workcard (WorkNumber, ItemCode, Order1, Status1,StartPlan, EndPlan) VALUES('TIL057253', '1TAMSY633', '2', '40', '2015-2-10','2015-2-11')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247410', '1TAMSY633', '1', '1TAMSY633 / Kuvaus työstä', '60', '12132', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247411', '1TAMSY633', '2', '1TAMSY633 / Kuvaus työstä', '60', '12141', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247412', '1TAMSY633', '5', '1TAMSY633 / Kuvaus työstä', '60', '12342', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247413', '1TAMSY633', '15', '1TAMSY633 / Kuvaus työstä', '60', '12241', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247414', '1TAMSY633', '19', '1TAMSY633 / Kuvaus työstä', '60', '12251', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	sleep(10);
	//Asiakas 2 ja 3 tilausta
	$lisays = $conn->prepare("INSERT INTO Client (ClientID, Name) VALUES('2', 'Hydroline')");
	$lisays->execute();
	
	//Tilaus 1
	$lisays = $conn->prepare("INSERT INTO ClientOrder (OrderID, BasicAmount, DueDate, ClientID) VALUES('3', '3', '2015-3-11', '2')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workcard (WorkNumber, ItemCode, Order1, Status1,StartPlan, EndPlan) VALUES('TIL057137', '1TAMSY522', '3', '40', '2015-2-10','2015-2-13')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247415', '1TAMSY522', '1', '1TAMSY522 / Kuvaus työstä', '60', '12141', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+0 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247416', '1TAMSY522', '2', '1TAMSY522 / Kuvaus työstä', '60', '12121', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+0 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247417', '1TAMSY522', '5', '1TAMSY522 / Kuvaus työstä', '60', '12221', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247418', '1TAMSY522', '15', '1TAMSY522 / Kuvaus työstä', '60', '12112', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+1 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	//Tilaus 2
	$lisays = $conn->prepare("INSERT INTO ClientOrder (OrderID, BasicAmount, DueDate, ClientID) VALUES('4', '33', '2015-3-11', '2')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workcard (WorkNumber, ItemCode, Order1, Status1,StartPlan, EndPlan) VALUES('TIL057413', '1TAMSY982', '3', '40', '2015-2-10','2015-2-13')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247419', '1TAMSY982', '1', '1TAMSY982 / Kuvaus työstä', '60', '12121', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+2 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247420', '1TAMSY982', '2', '1TAMSY982 / Kuvaus työstä', '60', '12141', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+2 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247421', '1TAMSY982', '5', '1TAMSY982 / Kuvaus työstä', '60', '12141', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+4 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247422 ', '1TAMSY982', '15', '1TAMSY982 / Kuvaus työstä', '60', '12341', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+4 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	//tilaus 3
		$lisays = $conn->prepare("INSERT INTO ClientOrder (OrderID, BasicAmount, DueDate, ClientID) VALUES('5', '13', '2015-3-11', '2')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workcard (WorkNumber, ItemCode, Order1, Status1,StartPlan, EndPlan) VALUES('TIL057881', '1TAMSY111', '3', '40', '2015-2-10','2015-2-13')");
	$lisays->execute();
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247423', '1TAMSY111', '1', '1TAMSY111 / Kuvaus työstä', '60', '12332', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+2 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247424', '1TAMSY111', '2', '1TAMSY111 / Kuvaus työstä', '60', '12311', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+2 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247425', '1TAMSY111', '5', '1TAMSY111 / Kuvaus työstä', '60', '12132', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+4 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));
	
	$lisays = $conn->prepare("INSERT INTO workphase (WorkNumber, ItemCodePhase, PhaseNumber, Description, Status, GroupID, Start, End) VALUES('247426 ', '1TAMSY111', '15', '1TAMSY111 / Kuvaus työstä', '60', '12221', :startdate, :enddate)");
	$lisays->execute(array(':startdate' => date('Y-m-d H:i:s', strtotime('+4 days')) , ':enddate' => date('Y-m-d H:i:s', strtotime('+6 days')) ));

	//TIlAUKSET STATE1
	sleep(20);
	$lisays = $conn->prepare("UPDATE workphase SET StartTime=:time WHERE WorkNumber IN (247407, 247410, 247415, 247419, 247423) ");
	$lisays->execute(array(':time' =>  date('Y-m-d H:i:s')));
	
	//TIlaus state 2
	sleep(20);
	$lisays = $conn->prepare("UPDATE workphase SET FinishTime=:time WHERE WorkNumber IN (247407, 247410, 247415, 247419, 247423) ");
	$lisays->execute(array(':time' =>  date('Y-m-d H:i:s')));
	
	$lisays = $conn->prepare("UPDATE workphase SET StartTime=:atime, FinishTime=:btime WHERE WorkNumber IN (247408, 247411, 247416, 247420, 247424) ");
	$lisays->execute(array(':atime' =>  date('Y-m-d H:i:s'), ':btime' =>  date('Y-m-d H:i:s')));
	
	$lisays = $conn->prepare("UPDATE workphase SET StartTime=:time WHERE WorkNumber IN (247409, 247412, 247417, 247421, 247425) ");
	$lisays->execute(array(':time' =>  date('Y-m-d H:i:s')));
	
	//TILAUS STATE FINAL
	sleep(20);
	$lisays = $conn->prepare("UPDATE workphase SET End=:time WHERE WorkNumber IN ( 247412, 247418, 247421) ");
	$lisays->execute(array(':time' =>  date('Y-m-d H:i:s', strtotime('-1 days'))));
	
	$lisays = $conn->prepare("INSERT INTO `workcard` (`WorkNumber`, `ItemCode`, `LabelCode`, `DrawingNumber`, `Info`, `Order1`, `Status1`, `StartPlan`, `EndPlan`, `DemandDate`, `Amounts`) VALUES
    ('TIL056159', '1NOASY287', NULL, NULL, NULL, NULL, '40', NULL, NULL, NULL, NULL)");
	$lisays->execute();

	$lisays = $conn->prepare("INSERT INTO `workphase` (`WorkNumber`, `ItemCodePhase`, `Start`, `End`, `PhaseNumber`, `Description`, `GroupID`, `Code`, `CodeNumber`, `Time`, `StartTime`, `FinishTime`) VALUES
	(2366569, '1NOASY287', NULL, NULL, 1, '1NOASY287 / KERÄILY - Putken aihioiden keräily', 10200, NULL, NULL, NULL, NULL, NULL),
	(2366570, '1NOASY287', NULL, NULL, 2, '1NOASY287 / KERÄILY - Putken osien keräily', 10200, NULL, NULL, NULL, NULL, NULL),
	(2366571, '1NOASY287', NULL, NULL, 5, '1NOASY287 / KERÄILY - Varren aihioiden keräily', 10200, NULL, NULL, NULL, NULL, NULL),
	(2366572, '1NOASY287', NULL, NULL, 6, '1NOASY287 / KERÄILY - Varren osien keräily', 10200, NULL, NULL, NULL, NULL, NULL),
	(2366573, '1NOASY287', NULL, NULL, 11, '1NOASY287 / TY?ST? - Putken 1. vaiheen sorvaus', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366574, '1NOASY287', NULL, NULL, 12, '1NOASY287 / HITSAUS - Putken 1. vaiheen hitsaus', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366575, '1NOASY287', NULL, NULL, 13, '1NOASY287 / TYÖSTÄ - Putken 2. vaiheen sorvaus', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366576, '1NOASY287', NULL, NULL, 14, '1NOASY287 / LEIMAUS - Putken leimaus ohjeen mukaan', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366577, '1NOASY287', NULL, NULL, 15, '1NOASY287 / HITSAUS - Putken 2. vaiheen hitsaus', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366578, '1NOASY287', NULL, NULL, 41, '1NOASY287 / TYÖSTÄ - Varren 1. vaiheen sorvaus', 12100, NULL, NULL, NULL, NULL, NULL),
	(2366579, '1NOASY287', NULL, NULL, 42, '1NOASY287 / HITSAUS - Varren 1. vaihen hitsaus', 12500, NULL, NULL, NULL, NULL, NULL),
	(2366580, '1NOASY287', NULL, NULL, 80, '1NOASY287 / KERÄILY - Kokoonpano-osien keräily', 10200, NULL, NULL, NULL, NULL, NULL),
	(2366581, '1NOASY287', NULL, NULL, 81, '1NOASY287 / ESIKP - Esikokoonpano varrelle', 14100, NULL, NULL, NULL, NULL, NULL),
	(2366582, '1NOASY287', NULL, NULL, 91, '1NOASY287 / KP - Kokoonpano ja testaus', 15100, NULL, NULL, NULL, NULL, NULL),
	(2366583, '1NOASY287', NULL, NULL, 96, '1NOASY287 / MAALAUS - Maalaus ohjeen mukaan', 16100, NULL, NULL, NULL, NULL, NULL),
	(2366584, '1NOASY287', NULL, NULL, 99, '1NOASY287 / PAKKAUS - Pakkaus ohjeen mukaan', 17000, NULL, NULL, NULL, NULL, NULL);");
	$lisays->execute();
?>

</body>
</html>