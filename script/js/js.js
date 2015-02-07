var WIDTH = $(window).width();
var HEIGHT = $(window).height();
var curSpeed = 1; //Kerroin updatelle
var dialogX;
var dialogY;

$(document).ready(function(){
	GetOrders();
	var worksTimer = setInterval(GetOrders, 60*1000);
	var clientTimer;
	
	var buttonLocation = $("#settingsButton").position();
	dialogX = buttonLocation.left - $("#settingsButton").width() - 150;
	dialogY = buttonLocation.top+ $("#settingsButton").height() + 15;
	
	/*Asetetaan dialogin sijainti näytöllä*/
	$(".settingsDialog").css("left", dialogX);
	$(".settingsDialog").css("top", dialogY);
	
	$("#Jugetyot").click(function(){
		GetOrders();
		worksTimer = setInterval(GetOrders, curSpeed * (60*1000));
		clearInterval(clientTimer);
	});
	
	$("#JugeAsiakkaat").click(function(){
		GetClients();
		clientTimer = setInterval(GetClients, 60*1000);
		clearInterval(worksTimer);
		
	});
});

function GetOrders()
{
	$(".jobsTable").empty()
	var jqxhr = $.ajax({
				url: "php/tilaukset.php",
				type: "post"
	});
	jqxhr.success(function(response, textStatus, jqXHR){
		
		var ParseSon = JSON.parse(response);
		console.log(ParseSon);
		$.each(ParseSon, function(key, value){

			$(".jobsTable").append("<tr><td class='jobRow'><p>"+value.WorkNumber+"</p></td></tr>");		
		});
		SetJobListener();
	});
}
function GetClients()
{
	$(".jobsTable").empty()
	var jqxhr = $.ajax({
				url: "php/Asiakkaat.php",
				type: "post"
	});
	jqxhr.success(function(response, textStatus, jqXHR){
		var ParseSon = JSON.parse(response);
		
		$.each(ParseSon, function(key, value){
			console.log(value);
			$(".jobsTable").append("<tr><td class='jobRow'><p>"+value.nimi+"</p></td></tr>");		
		});
		SetClientListener();
	});
}
function SetClientListener()
{
	$(".jobRow").click(function(){
            $(this).addClass("active");
            $cur = $(this);

			$("#modalDialog").empty();
            $("#modalDialog").empty();
			var jqxhr = $.ajax({
							url: "php/Asiakas.php",
							type: "post"
			});
			jqxhr.success(function(response, textStatus, jqXHR){
				
				var ParseSon = JSON.parse(response);
				$("#modalDialog").append("<h1 class='dialogHead' >Asiakkaan tiedot</h1>");
				console.log(ParseSon);
				$("#modalDialog").append("<h2 class='dialogHead' >Asiakas: "+ParseSon[0].nimi+"</h2>");
				$("#modalDialog").append("<h2 class='dialogHead' >Asiakasnumero: "+ParseSon[0].asiakasnumero+"</h2>");
				///// Tähän väliin tyot
				//////Jokaisen löytyvän työobjetkin perusteella tungetaan näkymään työnro, info sekä status
				$.each(ParseSon[0].tyot, function(key , value){
				$("#modalDialog").append("<h3 class='dialogHead' >Työnro: "+value['tyonro']+", työn info: "+value['info']+", työn status: "+value['status']+"</h3>");
				});			
				//// tyot loppuu
				//
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
			});
	});
}
function SetJobListener()
{
	$(".jobRow").click(function(){
            $(this).addClass("active");
            $cur = $(this);

            $("#modalDialog").empty();
			var jqxhr = $.ajax({
							url: "php/tilaus.php",
							type: "post"
			});
			jqxhr.success(function(response, textStatus, jqXHR){

			
				var ParseSon = JSON.parse(response);
				$("#modalDialog").append("<h1 class='dialogHead' >Tilauksen tiedot</h1>");
				
				$("#modalDialog").append("<h3>Tilausnumero : "+ ParseSon[0].tyonro +"</h3>");
				$("#modalDialog").append("<h4>Tilauksen status : "+ ParseSon[0].status +"</h4>");
				$("#modalDialog").append("<h3>Tilauksen historia</h3>");
				
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
        });
    });
}

function showSettings(){
	if($(".settingsDialog").css("display") == 'none'){
		$(".settingsDialog").css("display", 'inline');
		$("#updateSpeed").val(curSpeed);
	}else{
		$(".settingsDialog").css("display", 'none');
	}
}

function updateSpeed(){
	try{
		curSpeed = parseInt($("#updateSpeed").val());
		$(".settingsDialog").css("display", "none");
	}
	catch(err) {
		window.alert("Päivitysnopeudessa voi käyttää vain numeroarvoja");
	}
}