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

    // SlideUp - 
    $('#slup').on('click', function(){
        $(this).parent().siblings().slideUp("slow");
    })

    // SlideDown - 
    $('#sldown').on('click', function(){
        $(this).parent().siblings().slideDown("slow");
    })

    // SlideToggle - 
    $('#sltoggle').on('click', function(){
        $(this).parent().siblings().slideToggle("slow");
    })
    
    // FadeIn - 
    $('#fdin').on('click', function(){
        $(this).parent().siblings().fadeIn("slow");
    })

    // FadeOut - 
    $('#fdout').on('click', function(){
        $(this).parent().siblings().fadeOut("slow");
    })
});