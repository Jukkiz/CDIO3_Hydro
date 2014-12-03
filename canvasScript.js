
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
		GhostCanvas.style.width ='100%';
		GhostCanvas.style.height='80%';
		canvas.width  = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

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

	var canvas, context, images, area ;
	var img, posX, posY, sizeY, sizeX, pw, ph;
	var curr_area;
	var zoomed = new Boolean(0); //tsekataan onko zoom

	
	//window.onresize = setCanvas; <-- onko tämä sama asia kun addEventListener? toimii molemmilla.
    setCanvas();
	area = setAreas(canvas.width, canvas.height);

	  $(GhostCanvas).click(function(event) {

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
					//alert("Olen alue " + curr_area.id);
					drawImages(curr_area);
					i = area.length;
				}
			}
		}
		else
		{
			zoomedImages = setZoomedImages(canvas.width, canvas.height, curr_area);

			for(i=0; i< images.length; i++) {
		
			//var elementX = images[i];
				var element = zoomedImages[i];
			
				if (element.parent == curr_area.id)	
				{
			
				//alert("posx" + elementX.posX);
				//alert('posx ' + element.posX + ' posY' + element.posY + "leveys" +canvas.width);
					if ( checkCoordinates (mx, my, element) ) 
					{
						$(this).addClass("active");
           			 $cur = $(this);

           			 var teksti = "<h1>Kone "+element.id+"</h1></br></br><table><tr><td class='jobRow'>Työ Lisätietoa klikkaamalla</td></tr><tr><td class='jobRow'>Työ Lisätietoa klikkaamalla</td></tr></table>";
           			 

           			 $("#modalDialog").html(teksti);

            		$("#modalDialog").dialog({
              		  modal: true,
               		 draggable: true,
                		position: { my: "center", at: "top+75", of: window },
                		width: 500,
                		buttons: {
	                    "Sulje" : function(){
	                        $(this).dialog("close");
	                    }
	                },
                	close: function(e, ui){
                 	   $cur.removeClass("active");
                  	  document.getElementById("modalDialog").title = "kakka";
               		},
                	title: $(this).html()
				});	
						i = images.length;
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
                //ctx.strokeRect(0, 0, 10, 10);
            }
            else
            {
            	ctx.clearRect(area[i].posX - 5, area[i].posY - 5, area[i].sizeX + 10, area[i].sizeY + 10);
            }
        }

   		}
   		else
   		{
   			zoomedImages = setZoomedImages(canvas.width, canvas.height, curr_area);

			for(i=0; i< images.length; i++) {
		
			//var elementX = images[i];
				var element = zoomedImages[i];
			
				if (element.parent == curr_area.id)	
				{
			
				//alert("posx" + elementX.posX);
				//alert('posx ' + element.posX + ' posY' + element.posY + "leveys" +canvas.width);
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

	  $(myCanvas).mouseover(function(event) {

	  	var position = getPosition(event);
		mx = position.x;
		my = position.y;
		
			
	  });
	  
	  $("#fullView").click(function(event) {
			
			drawImages();
	  });


	   window.addEventListener('resize', drawImages(curr_area), false);