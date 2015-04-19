var WIDTH = $(window).width();
var HEIGHT = $(window).height();
var curSpeed = 1; //Kerroin updatelle
var tablePage = 0;
var dialogX;
var dialogY;
var foundSomething = new Boolean(0);
var searchTerm;
var hakuFlag = new Boolean(0);
var WorkFlag = new Boolean(0);
var ClientFlag = new Boolean(0);

$(document).ready(function(){
	GetOrders("", 0);
	hakuFlag = false;
	WorkFlag = false;
	ClientFlag = false;
	
	$("#prevPageButton").attr("disabled", true);
	var clientTimer;
	var WorkingMachineTimer = setInterval(GetWorkingMachines, 1000);
	
	var buttonLocation = $("#settingsButton").position();
	dialogX = buttonLocation.left - $("#settingsButton").width() - 150;
	dialogY = buttonLocation.top+ $("#settingsButton").height() + 15;
	
	/*Asetetaan dialogin sijainti näytöllä*/
	$(".settingsDialog").css("left", dialogX);
	$(".settingsDialog").css("top", dialogY);
	
	$("#Jugetyot").click(function(){
		hakuFlag = false;
		WorkFlag = true;
		ClientFlag = false;
		
		tablePage = 0;
		DoSearch();
	});
	
	$("#JugeAsiakkaat").click(function(){
		hakuFlag = false;
		WorkFlag = false;
		ClientFlag = true;
		
		tablePage = 0;
		DoSearch();
	});
	
	$("#SearchButton").click(function(){
		hakuFlag = true;
		WorkFlag = false;
		ClientFlag = false;
		
		DoSearch();
	});
	$("#prevPageButton").click(function(){
		tablePage--;
		DoSearch();
		
		if(tablePage == 0)
		{
			$("#prevPageButton").attr("disabled", true);
		}
		
	});
	$("#nextPageButton").click(function(){
		$("#prevPageButton").attr("disabled", false);
		tablePage++;
		DoSearch();
	});
	
	$('#SearchInput').keyup(function(e){
		if(e.keyCode == 13)
		{
			hakuFlag = true;
			WorkFlag = false;
			ClientFlag = false;
		
			tablePage = 0;
			DoSearch();
		}
	});
});
function DoSearch()
{
	foundSomething = false;
	if(hakuFlag == true)
	{
		searchTerm = $( "#SearchInput" ).val();
		GetOrders(searchTerm, tablePage);
		GetClients(searchTerm, tablePage);
	}
	else if(WorkFlag == true)
	{
		GetOrders(searchTerm, tablePage);
	}
	else
	{
		GetClients("", tablePage);
	}
}
function GetWorkingMachines()
{
	var jqxhr = $.ajax({
				url: "php/WorkingMachines.php",
				type: "post"
	});
	jqxhr.success(function(response, textStatus, jqXHR){
		var ParseSon = JSON.parse(response);
		console.log(ParseSon);
		$.each(ParseSon, function(key, value){
			console.log(value.GroupID);
		});
	});
}
function GetOrders(ItemName, page)
{
	$(".jobsTable").empty()
	var jqxhr = $.get("php/tilaukset.php", { item : ItemName ,itemPage : page });
	jqxhr.success(function(response, textStatus, jqXHR){
		
		var ParseSon = JSON.parse(response);

			foundSomething = true;
			console.log(ParseSon);
			$.each(ParseSon, function(key, value){

				$(".jobsTable").append("<tr><td class='jobRow'><p>"+value.WorkNumber+"</p></td></tr>");		
			});
			SetJobListener();
	});
}
function GetClients(clientName, page)
{
	$(".jobsTable").empty()
	var jqxhr = $.get("php/Asiakkaat.php", { client : clientName, itemPage : page });
	jqxhr.success(function(response, textStatus, jqXHR){
		var ParseSon = JSON.parse(response);
		
		$.each(ParseSon, function(key, value){
			console.log(value);
			$(".jobsTable").append("<tr><td class='jobRow'><p>"+value.Name+"</p></td></tr>");		
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
			
			var jqxhr = $.get( "php/asiakas.php", { client: $(this).text() } );
			
			jqxhr.success(function(response, textStatus, jqXHR){

				var ParseSon = JSON.parse(response);
				$("#modalDialog").append("<h1 class='dialogHead' >Asiakkaan tiedot</h1>");
				console.log(ParseSon);
				$("#modalDialog").append("<h2 class='dialogHead' >Asiakas: "+ParseSon[0].Name+"</h2>");
				//$("#modalDialog").append("<h2 class='dialogHead' >Asiakasnumero: "+ParseSon[0].asiakasnumero+"</h2>");
				///// Tähän väliin tyot
				//////Jokaisen löytyvän työobjetkin perusteella tungetaan näkymään työnro, info sekä status
				var historiaTable = "<div id='ScrollWOrksTalble'><table class='tableWorks' ><th class='thWorks' >Työnumero</th><th class='thWorks' >Työn status</th>";
						$.each(ParseSon[0]['Works'], function(key , value){
							historiaTable += "<tr class='trWorks' ><td class='tdWorks'>"+value.WorkNumber+"</td><td class='tdWorks'>"+value.Status1+"</td>";
						});
				historiaTable += "</table></div>";
				$("#modalDialog").append(historiaTable);
						 
				$("#ScrollWOrksTalble").css("max-height", "300px");
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
			var jqxhr = $.get( "php/Tilaus.php", { item: $(this).text() } );
			
			jqxhr.success(function(response, textStatus, jqXHR){

			
				var ParseSon = JSON.parse(response);
				console.log(ParseSon);
				$("#modalDialog").append("<h1 class='dialogHead' >Tilauksen tiedot</h1>");
				
				$("#modalDialog").append("<h3>Tilausnumero : "+ ParseSon['infos'][0].WorkNumber +"</h3>");
				$("#modalDialog").append("<h3>ItemCode : "+ ParseSon['infos'][0].ItemCode +"</h3>");
				$("#modalDialog").append("<h4>Tilauksen status : "+ ParseSon['infos'][0].status1 +"</h4>");
				$("#modalDialog").append("<h3>Tilauksen historia</h3>");
				var historiaTable = "<div id='ScrollWOrksTalble'><table class='tableWorks' ><th class='thWorks' >Työvaiheen kuvaus</th><th class='thWorks' >Työkone</th><th class='thWorks' >Työtila</th>";
						$.each(ParseSon ['Path'], function(key , value){
							historiaTable += "<tr class='trWorks' ><td class='tdWorks'>"+value.Description+"</td><td class='tdWorks'>"+value.GroupID+"</td>";
							if(value.StartTime == null)
							{
								historiaTable += "<td class='tdWorks'>Odottaa aloittamista</td>"
							}
							else if(value.StartTime != null && value.FinishTime == null)
							{
								historiaTable += "<td class='tdWorks'>Työ vaiheessa</td>"
							}
							else if(value.StartTime != null && value.FinishTime != null)
							{
								historiaTable += "<td class='tdWorks'>Suoritettu</td>"
							}
							historiaTable += "</tr>"
						});
						historiaTable += "</table></div>";
						 $("#modalDialog").append(historiaTable);
						 
				$("#ScrollWOrksTalble").css("height", "300px");
				
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