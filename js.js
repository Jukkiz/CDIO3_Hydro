var WIDTH = $(window).width();
var HEIGHT = $(window).height();

$(document).ready(function(){
    for(var i = 0; i < 11; i++){
        $(".jobsTable").append("<tr><td class='jobRow'>Työ "+(i+1)+"</td></tr>");
    }

    $(".jobRow").click(function(){
            $(this).addClass("active");
            $cur = $(this);

            $("#modalDialog h1").html("Työ XXX");
            $("#modalDialog").append("<table class='test'></table> ")
            $("#modalDialog span").append("<span ><img src= 'images/pohjareitti.png' height='300' width='400'></span>");
            for(var i = 0 ; i < 10; i++){
                $(".test").append("<tr><td class='jobRow'>Tietoa työn matkasta</td></tr>");
            }
            

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
        });
});