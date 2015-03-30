<?php
session_start();
if(!isset($_SESSION['user']))
{
	Header ("Location: Login.php");
} 
?>
<html>
	<head>
		 <link rel="stylesheet" type="text/css" media="(max-width: 1980px)" href="style/mainstyle.css">
		 <meta charset="UTF-8"> 
		 <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
		 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		 <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
		 <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		 <script src="script/js/imageArray.js"></script> <!-- Sonjan lisäys -->
	</head>
	<body>
		<div id="modalDialog">
			<div><p>Tekstiä jostain muualta</p></div>
		</div>
		<!-- Canvas -->
		<div class="mainPanel">
			<!-- Onko lie miten tyhmää tehdä tästäkin canvas... -->
			<canvas id = "popup" style="width:10%; height:10%;"></canvas>
			<canvas id = "GhostCanvas"></canvas>
			<canvas id = "InfoCanvas"></canvas>
			<canvas id = "myCanvas"></canvas>

			<!--<img src="pohja.jpg"></img>-->
		</div>
		
		<!-- Haku ja listaus -->
		<div class="rightPanel">
			<input type="button" class="JugeButton" id="settingsButton" value="Asetukset" onClick="showSettings()"></input>
			<div id="searchDiv">
				<input type="text" class="searchField" id="searchBox"></input>
				<input type="button" value="Hae" class="floatLeft"></input>
			</div>
			<div id="buttonDiv">
				<input type="button" id="Jugetyot" value="Työt" class="JugeButton"></input>
				<input type="button" id="JugeAsiakkaat" style="float:right" value="Asiakkaat" class="JugeButton"></input>
			</div>
			<!-- Tablen runko, sisältö AJAXista -->
			<div id="scrollTable">
				<table class="jobsTable"></table>
			</div>	
				<div class="info">
				<p>Tarkempaa informaatiota koskien valittua tilausta <br></br>(Ylemmässä aktiivisena)</p>
			</div>
		</div>
		<script src="script/js/js.js"></script>
		<script src="script/js/canvasScript.js"></script> <!-- Sonjan lisäys -->
		<div class='settingsDialog'>
			<p>Päivitysnopeus:<br>
			<input type='text' id='updateSpeed' style="width: 50px"></input>
			</p><br>
			<input type='button' value='Tallenna' class='JugeButton' onClick="updateSpeed()"></input>
		</div>
	</body>
</html>