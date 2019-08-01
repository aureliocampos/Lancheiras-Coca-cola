function carouselVideos() {
    const owl = $('#lancheiras-carousel');
    owl.owlCarousel({
        oop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0: {
                items:1
            },
            320:{
                items:1
            },
            440:{
                items:1
            },
            768:{
                items:4
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
}
$(document).ready(() => {
    carouselVideos();
});

function mainNav() {

    $('.lanc-mainNav-link').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.lanc-options-content > div').not(target).hide();

        $(target).fadeIn(600);
    });

}
$(document).ready(() => {
    mainNav();
});

function ScrollNavHeader() {
    $('.lanc-banner-item .lanc-banner-link[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 10
        }, 900);
    });
}
$(document).ready(() => {
    ScrollNavHeader();
});


