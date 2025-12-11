$(document).ready(function() {
    $('.burger').click(function(){
        $('.mobile-menu').fadeIn(300);
    });

    $('.burger-min').click(function(){
        $('.mobile-menu').fadeOut(300);
    });

    $('.footer-title').each(function(i, item){
        $(item).click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $($('.footer__links')[i]).slideToggle(300);
        });
    });
    
    
});