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
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
            },
        ]
    });
    

    $('.faq-section').each(function(i, item){
        $(item).attr('id', 'faq-' + i);
        $("#faq-"+ i + " .faq-question").each(function(k, quest){
            $(quest).click(function(){
                $($("#faq-"+ i + " .faq-item")[k]).toggleClass('active');
                $($("#faq-"+ i + " .faq-answer")[k]).slideToggle(300);
            });
        });
    });

    $('.our-values-inner').each(function(i, item){
        $(item).attr('id', 'our-values-inner-' + i);
        $("#our-values-inner-"+ i + " .our-values-col-title").each(function(k, quest){
            $(quest).click(function(){
                $($("#our-values-inner-"+ i + " .our-values-col-title")[k]).toggleClass('active');
                $($("#our-values-inner-"+ i + " .our-values-col-text")[k]).slideToggle(300);
            });
        });
    });

});