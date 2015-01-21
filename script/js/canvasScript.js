
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

		canvas.style.width ='100%';
		//se on liian korkea se canvas?
		canvas.style.height='80%';

		canvas.width  = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		GhostCanvas.style.width ='75%';
		GhostCanvas.style.height='79%';
		GhostCanvas.width = GhostCanvas.offsetWidth;
		GhostCanvas.height = GhostCanvas.offsetHeight;
	
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
					context.scale(2.3,2.0);		
				}
				else if(area.id == "bottom_left") {
					context.translate(0,-canvas.height);
					context.scale(2,2);	
				}
				else if (area.id == "bottom_right") {
					context.translate(-canvas.width, -canvas.height);
					context.scale(2.2,2.8);
				}
				
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
	   img.src = "images/testipohja.jpg";;
	}
//------------------------------------------------------------//

//esitellään muuttujat ja asetetaan clickille ja resizelle kuuntelu

	var canvas, context, images, area, tooltip, tipcontext;
	var img, posX, posY, sizeY, sizeX, pw, ph;
	var curr_area;
	var zoomed = new Boolean(0); //tsekataan onko zoom

	//window.onresize = setCanvas; <-- onko tämä sama asia kun addEventListener? toimii molemmilla.
    setCanvas();
	area = setAreas(canvas.width, canvas.height);

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
					ctx.clearRect(0,0,canvas.width, canvas.height);
					drawImages(curr_area);
					i = area.length;
					
				}
			}
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
						//$(this).addClass("active"); what happens here
						//$cur = $(this);

						$("#modalDialog").empty();
						var jqxhr = $.ajax({
							url: "php/kone.php",
							type: "post"
						});
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
				
						var työtable = "<table class='tableWorks' ><th class='thWorks' >Työnumero</th><th class='thWorks'>Tila</th>";
						$.each(ParseSon[0].Work, function(key , value){
							työtable += "<tr class='trWorks' ><td class='tdWorks'>"+value['WorkNumber']+"</td><td class='tdWorks'>"+value['Status']+"</td></tr>";
						});
						työtable += "</table>";
						 $("#modalDialog").append(työtable);
						
				
						$("#modalDialog").dialog({
							modal: true,
							draggable: true,
							position: { my: "center", at: "center", of: window },
							width: 500,
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
				
				//tämä on nyt vaan heitetty alueen oikeaan reunaan puolet popupin koosta reunaan:
				tooltip.style.left = ((curr_area.posX + curr_area.sizeX) - tooltip.width/2) + "px";
				
				tooltip.style.top = (curr_area.posY + 20) + "px";
				tipcontext.clearRect(0,0, tooltip.width, tooltip.height);
				
				//fontti pitäisi määrittää canvasin koon mukaan varmaan jo heti alkuunsa, pitää korjata!
				tipcontext.font = 'italic 30pt Calibri';
				tipcontext.fillText(str, 10, 50);
				
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