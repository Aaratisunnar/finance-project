$(document).ready(function($) {
    $('.site-header .header-b #toggle-menu').click(function() {
        $('body .site-holder').addClass('open-menu');
    })

    $('.site-header .main-navigation ul .btn-close').click(function() {
        $('body .site-holder').removeClass('open-menu');
    })

    $('.main-navigation ul .has-child').append('<div class="arrow-down"><span class="fas fa-angle-down"></span></div>');

    $('.main-navigation ul .has-child .arrow-down').click(function() {
        $(this).prev().slideToggle();
        $(this).toggleClass('active');
    });

    $('.testimonial-section .slider').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
    });

    $('.client .row').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 6,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 2,
                margin: 0
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    });

    //This one is for Pre loader and has no dependicies. Js

    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    $('.count .counter').counterUp({
        delay: 10,
        time: 1000,
    });

    $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("fa-minus fa-plus");
    });

    //This is for Masonary Layout
    var colc = new Colcade('.grid', {
        columns: '.grid-col',
        items: '.grid-item'
    });

    // This is for magnific pop gallery and has dependencies cdn is used.
    $('#gallery-detail .gallery-holder').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        },
    });

})

//To the top btn js. Has no dependencies.

$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $('.to-top').fadeIn();
    } else {
        $('.to-top').fadeOut();
    }

});

$('.to-top').click(function() {
    $('html , body').animate({ scrollTop: 0 }, 800);
});