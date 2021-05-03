$(document).ready(function(){

    // Hide - Oculta el contenido
    $('#hide').on('click', function(){
        $(this).parent().siblings().hide();
    })

    // Show - Muestra el contenido
    $('#show').on('click', function(){
        $(this).parent().siblings().show();
    })

    // Toogle - Oculta y Muestra el contenido
    $('#toggle').on('click', function(){
        $(this).parent().siblings().toggle();
    })

});