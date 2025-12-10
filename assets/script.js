$(document).ready(function() {
    $('.burger').click(function(){
        $('.mobile-menu').fadeIn(300);
    });

    $('.burger-min').click(function(){
        $('.mobile-menu').fadeOut(300);
    });
});