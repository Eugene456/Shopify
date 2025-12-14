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
    
    $('.the-best-product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging: function(slick,index) {
            return '<a class="dot"></a>';
        },
    });
    
});