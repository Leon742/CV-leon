$(document).ready(function(){
    $("#primero").click(function(){
        $('html,body').animate({ 
            scrollTop: $("#titulo_herramientas").offset().top 
        }, 1000);
    });
});