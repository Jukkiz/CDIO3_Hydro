function getLateMachines(curr_area){
	var jqxhr = $.ajax({
					url: "php/LateMachines.php",
					type: "post"
		});
		jqxhr.success(function(response, textStatus, jqXHR){
			ParseSon = JSON.parse(response);
			console.log(ParseSon);
			$.each(ParseSon, function(key , value){
				AlertArea(value.GroupID, curr_area);
			});
		});
}
//Funktio hakee töiden lukumäärät eri alueilla!
	function getJobCount() {

	var jqxhr = $.ajax({
					url: "php/tyoMaarat.php",
					type: "post"
		});
		jqxhr.success(function(response, textStatus, jqXHR){
			AreasJobCounts = JSON.parse(response);
			console.log(AreasJobCounts);

			DrawInfoBoxes();
		});
	}

//etsii hiiren sijainnin kartalla
	function getPosition(e) {

    //this section is from http://www.quirksmode.org/js/events_properties.html
    var targ;
    if (!e)
        e = window.event;
    if (e.target)
        targ = e.target;
    else if (e.srcElement)
        targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;

    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
    var x = e.pageX - $(targ).offset().left;
    var y = e.pageY - $(targ).offset().top;

    return {"x": x, "y": y};
};
//osutaanko hiirellä palikkaan? //vanha mutta voi tulla käyttöä myöhemmin
	function checkCoordinates (mouseX, mouseY, element) {
		
		return  (element.posX <= mouseX) && (element.posX + element.sizeX >= mouseX) &&
			(element.posY <= mouseY) && (element.posY + element.sizeY >= mouseY);	
	 }	
//------------------------------------------------------------------------//
//Jokaisen alueen tiedot esitettynä!
function DrawInfoBoxes()
{
	infos.clearRect(0,0, infos.width, infos.height);
	console.log(AreasJobCounts);
	
	infos.globalAlpha = 1;
	Areas = setAreas(canvas.width, canvas.height);
	for( i = 0 ; i < Areas.length ; i++)
	{
		//Piirretään info laatikot jokaiselle alueelle!!
		infos.strokeStyle = "#FF9999";
		infos.lineWidth = 5;
		infos.fillStyle = "#ffffff";
		infos.fillRect((Areas[i].posX + Areas[i].sizeX) - (Areas[i].sizeX/2), Areas[i].posY + 50, 200, 100); 
		infos.strokeRect((Areas[i].posX + Areas[i].sizeX) - (Areas[i].sizeX/2), Areas[i].posY + 50, 200, 100); 
		
		//Info laatikoiden teksti sisältö
		//Otsikko
		var str = "Alue " + Areas[i].id;
		infos.font="24px Arial"
		infos.fillStyle = "#000000";
		infos.fillText(str,(Areas[i].posX + Areas[i].sizeX) - (Areas[i].sizeX/2) + 10, Areas[i].posY  + 85);
		//Työ lukumäärä!
		var str = "Töiden lukumäärä " + AreasJobCounts[Areas[i].id].AreasWorks;
		infos.font="14px Arial"
		infos.fillStyle = "#000000";
		infos.fillText(str,(Areas[i].posX + Areas[i].sizeX) - (Areas[i].sizeX/2) + 10, Areas[i].posY + 115);
		//Työt myöhässä
		var str = "Töitä myöhässä " + AreasJobCounts[Areas[i].id].LateWorks; ;
		infos.font="14px Arial"
		infos.fillStyle = "#000000";
		infos.fillText(str,(Areas[i].posX + Areas[i].sizeX) - (Areas[i].sizeX/2) + 10, Areas[i].posY + 135);

	}
}
function machinejobsinfo()
{
	var jqxhr = $.ajax({
					url: "php/machineJobCOunt.php",
					type: "post"
		});
		jqxhr.success(function(response, textStatus, jqXHR){
			MachineJobsCOunts = JSON.parse(response);
			console.log("Työkoneet");
			console.log(MachineJobsCOunts);
		});
}
//punanen neliö koneen päällä jos siinä jotain hälyttävää!!!
function AlertArea(MachineID, SelectedArea)
{
	//console.log("Työt");
	//console.log(SelectedArea);
	SelectedArea = setZoomedImages(canvas.width, canvas.height, SelectedArea);
	infos.globalAlpha = 0.9;
	//console.log(SelectedArea);

	for( var i = 0 ; i < SelectedArea.length ; i++)
	{
		test = SelectedArea[i];
		//console.log("outside");
		if(test.id == MachineID)
		{
			//console.log(SelectedArea[i]);
			infos.fillStyle = "#FF9999";
		    infos.fillRect(test.posX, test.posY, test.sizeX, test.sizeY);
		}
		infos.strokeStyle = "#FF9999";
		infos.lineWidth = 5;
		infos.fillStyle = "#ffffff";
		infos.fillRect((SelectedArea[i].posX + SelectedArea[i].sizeX) - (SelectedArea[i].sizeX/2) - 80, SelectedArea[i].posY + 50, 200, 100); 
		infos.strokeRect((SelectedArea[i].posX + SelectedArea[i].sizeX) - (SelectedArea[i].sizeX/2) - 80, SelectedArea[i].posY + 50, 200, 100); 
		
		//Info laatikoiden teksti sisältö
		//Otsikko
		var str = "Kone " + SelectedArea[i].id;
		infos.font="24px Arial";
		infos.fillStyle = "#000000";
		infos.fillText(str,(SelectedArea[i].posX + SelectedArea[i].sizeX) - (SelectedArea[i].sizeX/2) - 70, SelectedArea[i].posY  + 85);
		//Töiden lkm!
				
		$.each(MachineJobsCOunts, function(key , value){
			if(value.GroupID == test.id)
			{
				var str = "Töiden lukumäärä " + value.JobCount;
				infos.font="14px Arial";
				infos.fillStyle = "#000000";
				infos.fillText(str,(SelectedArea[i].posX + SelectedArea[i].sizeX) - (SelectedArea[i].sizeX/2) - 70, SelectedArea[i].posY + 115);
			}
		});
	}
	
}
function ClearInfos()
{
	infos.clearRect(0,0, 2000, 1000);
}
//piirretään nuoli joka vie takaisin normaalinäkymään
function drawBackButton() {
		var backbutton = new Image();
		backbutton.src = "images/Back.png"; 			
		backbutton.onload = function() {
					ctx.globalAlpha = 1;
					ctx.drawImage(backbutton, 5, 5, 25, 25 );
		};
	}
//mitä aluetta klikataan?
function checkArea (mouseX, mouseY, area) {
	return (area.posX <= mouseX) && (area.posX + area.sizeX >= mouseX) &&
		(area.posY <= mouseY) && (area.posY + area.sizeY >= mouseY);
}
	
//Popup poistetaan, kun hiiri ei majaile enää canvasilla:
	function RemoveDrawings(mx, my) 
	{
		return mx >= canvas.width-50 || mx <= 50 || my >= canvas.height-50 || my <= 50;
	}
	
//pistetään canvas kondikseen ja piirretään sitten kuvat (suoritetaan vain alussa)
	function setCanvas() 
	{
		canvas = document.getElementById('myCanvas');
		context = canvas.getContext('2d');
		GhostCanvas = document.getElementById('GhostCanvas');
	    ctx = GhostCanvas.getContext('2d');
		
		InfoCanvas = document.getElementById('InfoCanvas');
	    infos = InfoCanvas.getContext('2d');

		canvas.style.width ='100%';
		//se on liian korkea se canvas?
		canvas.style.height='80%';

		canvas.width  = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		
		GhostCanvas.style.width ='75%';
		GhostCanvas.style.height='79%';
		GhostCanvas.width = GhostCanvas.offsetWidth;
		GhostCanvas.height = GhostCanvas.offsetHeight;
	
		InfoCanvas.style.width ='75%';
		InfoCanvas.style.height='79%';
		InfoCanvas.width = InfoCanvas.offsetWidth;
		InfoCanvas.height = InfoCanvas.offsetHeight;
		drawImages();
	}
//tätä kutsutaan kokoajan. jos parametri, ollaan zoomaamassa, jos ei mennään normitilaan.
	function drawImages(area) {
	
		img = new Image();
		images = new Array();
		zoomed = false; //oletuksena false. Tämän avulla estetään zoomaaminen jos ollaan jo zoomattu

		//jos painetaan "takaisin", se piirtää sen taas normitilassa.//
		context.restore(); 
		$("#fullView").hide(); //takas linkki vaan fullviewissä
		
		img.onload = function() {
		
			if (area != undefined) {

				//näytetaan "takaisin" linkki
				$("#fullView").show();
				context.save();
				
				zoomed = true;

				
				
				if(area.id == "upper_left") {
					context.scale(2.5,1.8);
				}
				else if(area.id == "upper_right") {
					context.translate(-canvas.width,0);
					context.scale(2.5,1.8);		
				}
				else if(area.id == "bottom_left") {
					context.translate(0,-canvas.height);
					context.scale(2,2);	
				}
				else if (area.id == "bottom_right") {
					context.translate(-canvas.width, -canvas.height);
					context.scale(2.2,2.8);
				}
				ctx.clearRect(0,0,canvas.width, canvas.height);
				drawBackButton();
			}
			images = setImages(canvas.width, canvas.height);
			context.drawImage(img, 0, 0, canvas.width, canvas.height);
	
			
			for (var i = 0; i< images.length;i++) {
					
					var imgSource = new Image();
					imgSource.src = "images/" + images[i].img; 
					
					imgSource.onload = (function(i) {
						return function() {
						context.drawImage(this, images[i].posX, images[i].posY, images[i].sizeX, images[i].sizeY );
					};	
				})(i);				
			}
		};
		//img.src = "testi.jpg";;
	   img.src = "images/testipohja.jpg";
	}
//------------------------------------------------------------//

//esitellään muuttujat ja asetetaan clickille ja resizelle kuuntelu

	var canvas, context, images, area, tooltip, tipcontext;
	var img, posX, posY, sizeY, sizeX, pw, ph;
	var curr_area;
	var MachineJobsCOunts = null;
	var AreasJobCounts; // objekti työ lukumäärälle
	var worksCount = setInterval(getJobCount, 2*1000); //Timeri hakee töiden lkm joka x sekuntti

	var zoomed = new Boolean(0); //tsekataan onko zoom
	//window.onresize = setCanvas; <-- onko tämä sama asia kun addEventListener? toimii molemmilla.
    setCanvas();
	area = setAreas(canvas.width, canvas.height);

	getJobCount();

	  $(GhostCanvas).click(function(event) {

		tooltip.style.left = "-200px"; 
		
		var position = getPosition(event);
		mx = position.x;
		my = position.y;

		if (zoomed == false) {
		
			img = new Image();
			area = setAreas(canvas.width, canvas.height);
			
			for (i=0; i< area.length; i++){
				
				curr_area = area[i];
				if(checkArea(mx, my, curr_area)) {
					clearInterval(worksCount);	
					ctx.clearRect(0,0,canvas.width, canvas.height);
					drawBackButton();//takas nappi
					
					ClearInfos();
					//AlertArea(12141, area[i]); piirtää punasen neliön
					drawImages(curr_area);
					machinejobsinfo();
					getLateMachines(curr_area);
					zoomedImages = setZoomedImages(canvas.width, canvas.height, curr_area);
					i = area.length;			
				}
			}
		}
		else
		{
			zoomedImages = setZoomedImages(canvas.width, canvas.height, curr_area);
			
			//takaisin normaalinäkymään (Yläkulman back nappi)
			if(((5<= mx) && (30 >= mx) &&(5 <= my) && (30 >= my))){
					drawImages();
					ClearInfos();
					DrawInfoBoxes();
					worksCount = setInterval(getJobCount, 2*1000);
			}
			

			for(i=0; i< images.length; i++) {

				var element = zoomedImages[i];
			
				if (element.parent == curr_area.id)	
				{
					if ( checkCoordinates (mx, my, element) ) 
					{
						//$(this).addClass("active"); what happens here
						$cur = $(this);

						
						$("#modalDialog").empty();

						var jqxhr = $.get( "php/kone.php", { machine: element.id});
						
						jqxhr.success(function(response, textStatus, jqXHR){
						
						var ParseSon = JSON.parse(response);
						$("#modalDialog").append("<h1 class='dialogHead' >Koneen tiedot</h1>");
						 
						$("#modalDialog").append("<h2 class='dialogHead'> Koneryhmä " + ParseSon[0].GroupID + "</h2>");
						
						var machineList = "<table class='tableWorks'><tr><th class='thWorks'>Ryhmän koneet</th></tr>"
						$.each(ParseSon[0].Machines, function(key , value){
							console.log(value);
							machineList += "<tr class='trWorks'><td class='tdWorks'>"+value['MachineID']+"</td></tr>";
						});
						machineList += "</table>";
						
						$("#modalDialog").append(machineList);  
						$("#modalDialog").append("<h2 class='dialogHead'>Ryhmän työt</h2>");
				
						var työtable = "<div id='duh'><table class='tableWorks' ><th class='thWorks' >Työnumero</th><th class='thWorks'>Kuvaus</th§>";
						$.each(ParseSon[0].Work, function(key , value){
							työtable += "<tr class='trWorks' ><td class='tdWorks'>"+value['WorkNumber']+"</td><td class='tdWorks'>"+value['Description']+"</td></tr>";
						});
						työtable += "</table></div>";
						 $("#modalDialog").append(työtable);
						$("#duh").css("height", "300px");
				
						$("#modalDialog").dialog({
							modal: true,
							draggable: true,
							position: { my: "center", at: "center", of: window },
							width: 800,
							buttons: {
								"Sulje" : function(){
									$(this).dialog("close");
								}
							},
							close: function(e, ui){
							   $cur.removeClass("active");
							  
							},
							title: $(this).html()
						});	
							i = images.length;
						});
					}
				}
					
			}
		}
				
		//vanha piirto, kun klikattiin palikoita koko näytöllä
		/*	for(i=0; i< images.length; i++) {
		
			var element = images[i];
				
				if ( checkCoordinates (mx, my, element) ) 
				{
					alert("Olen palikka " + element.id);
					i = images.length;
				}			
		}*/
		
		
	  });
	  
	  GhostCanvas.addEventListener('mousemove', function (evt) {

        var position = getPosition(evt);
        mx = position.x;
        my = position.y;
		
		//LISÄYS: pop up, tapahtuu piirrosten jälkeen.
		tooltip = document.getElementById("popup");
		tipcontext = tooltip.getContext("2d");
		var str = "Jotain tärkeää";

        if (zoomed == false) {

        for (i = 0; i < area.length; i++) {

			curr_area = area[i];

            if (checkArea(mx, my, curr_area)) {
				
            	ctx.clearRect(area[i].posX - 5, area[i].posY - 5, area[i].sizeX + 10, area[i].sizeY + 10);
            	ctx.globalAlpha = 0.3;
            	ctx.fillStyle = "#99CCFF";
            	ctx.fillRect(area[i].posX, area[i].posY, area[i].sizeX, area[i].sizeY);
              	ctx.strokeStyle = "#0033CC";
              	ctx.lineWidth=10;
              	ctx.strokeRect(area[i].posX, area[i].posY, area[i].sizeX, area[i].sizeY); 
				
				/*
				//tämä on nyt vaan heitetty alueen oikeaan reunaan puolet popupin koosta reunaan:
				tooltip.style.left = ((curr_area.posX + curr_area.sizeX) - tooltip.width/2) + "px";
				
				tooltip.style.top = (curr_area.posY + 20) + "px";
				tipcontext.clearRect(0,0, tooltip.width, tooltip.height);
				
				//fontti pitäisi määrittää canvasin koon mukaan varmaan jo heti alkuunsa, pitää korjata!
				tipcontext.font = 'italic 30pt Calibri';
				tipcontext.fillText(str, 10, 50);
				*/
				i = area.length;
            }
            else
            {
			
			//tämä ei toimi koska piirros on ihan kiinni reunassa. 
			//ratkaisu olisi lisätä vähän reunaa kuvalle, että mouseposition ehtii tajuta muutoksen. (malli tooltipillä)
            	ctx.clearRect(area[i].posX - 5, area[i].posY - 5, area[i].sizeX + 10, area[i].sizeY + 10);
            }
        }
			//pistetään tooltip pois kun liikutaan tarpeeksi reunaan:
			if ( RemoveDrawings(mx, my) ) {	tooltip.style.left = "-200px"; 	}

   		}
   		else
   		{
   			zoomedImages = setZoomedImages(canvas.width, canvas.height, curr_area);

			for(i=0; i< images.length; i++) {
		
				var element = zoomedImages[i];
			
				if (element.parent == curr_area.id)	
				{
			
					if ( checkCoordinates (mx, my, element) ) 
					{
						ctx.clearRect(element.posX - 5, element.posY - 5, element.sizeX + 10, element.sizeY + 10);
		            	ctx.globalAlpha = 0.3;
		            	ctx.fillStyle = "#99CCFF";
		            	ctx.fillRect(element.posX, element.posY, element.sizeX, element.sizeY);
		              	ctx.strokeStyle = "#0033CC";
		              	ctx.lineWidth=10;
		              	ctx.strokeRect(element.posX, element.posY, element.sizeX, element.sizeY);
						
						i = images.length;
					}
					else
		            {
		            	ctx.clearRect(element.posX - 5, element.posY - 5, element.sizeX + 10, element.sizeY + 10);
		            }
				}
					
			}
   		}
   		}, false);
	  
	  $("#fullView").click(function(event) {
			
			drawImages();
	  });


	   window.addEventListener('resize', drawImages(curr_area), false);