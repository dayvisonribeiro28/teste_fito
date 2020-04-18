$(document).ready(function() {
 var botao = $('.botao');
 var dropDown = $('.ul_area_especialista');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function() {
 var botao_mobile = $('.botao_mobile');
 var dropDown = $('.ul_menumobile');    

    botao_mobile.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function() {
 var botao = $('.botao_mobile_form');
 var dropDown = $('.ul_area_especialista_mobile');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
