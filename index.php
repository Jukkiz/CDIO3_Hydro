<html>
	<head>
		 <link rel="stylesheet" type="text/css" media="(max-width: 1600px)" href="style\mainstyle.css">
		 <meta charset="UTF-8"> 
		 <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
		 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		 <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
		 <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		 <script src="script\js\imageArray.js"></script> <!-- Sonjan lisäys -->
	</head>
	<body>
		<div id="modalDialog">
			<div><p>Tekstiä jostain muualta</p></div>
		</div>
		<!-- Canvas -->
		<div class="mainPanel">
			<canvas id = "myCanvas"></canvas>
            <canvas id ="GhostCanvas"></canvas>
            <a id ="fullView">Takaisin</a>
			<!--<img src="pohja.jpg"></img>-->
		</div>
		
		<!-- Haku ja listaus -->
		<div class="rightPanel">
			<input type="text" class="roundEdges" id="searchBox"></input>
			<input type="button" value="Hae" class="floatLeft"></input>
			
			<input type="button" value="Myöhästyneet työt" class="jugevalittu"></input>
			<input type="button" value="Toinen filtteri" class="JugeButton"></input>
			<!-- Tablen runko, sisältö AJAXista -->
			<table class="jobsTable"></table>
			
			<div class="info">
				<p>Tarkempaa informaatiota koskien valittua tilausta <br></br>(Ylemmässä aktiivisena)</p>
			</div>
		</div>
		<script src="script\js\js.js"></script>
		<script src="script\js\canvasScript.js"></script> <!-- Sonjan lisäys -->
	</body>
</html>