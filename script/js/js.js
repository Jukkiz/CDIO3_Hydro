var WIDTH = $(window).width();
var HEIGHT = $(window).height();

$(document).ready(function(){
	GetOrders();
	var worksTimer = setInterval(GetOrders, 60*1000);
	var clientTimer;
	
	$("#Jugetyot").click(function(){
		GetOrders();
		worksTimer = setInterval(GetOrders, 60*1000);
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
		
		$.each(ParseSon, function(key, value){
			console.log(value);
			console.log(value.tyonro);
			$(".jobsTable").append("<tr><td class='jobRow'><p>"+value.tyonro+"</p></td></tr>");		
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
				
				$("#modalDialog").append("<h1 class='dialogHead' >Asiakas "+ParseSon[0].nimi+"</h1>");
				$("#modalDialog").append("<h1 class='dialogHead' >Asiakas "+ParseSon[0].asiakasnumero+"</h1>");
				
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