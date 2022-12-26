jQuery(function($) {
//Services Carousel
    $(".our-services").slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        prevArrow: '<div class="hc-arrow-left"><i class="fa fa-arrow-left"></i></div>',
        nextArrow: '<div class="hc-arrow-right"><i class="fa fa-arrow-right"></i></div>',
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
              }
            },
        ]
    });

//Leaders Carousel
    $(".our-leaders").slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<div class="hc-arrow-left"><i class="fa fa-arrow-left"></i></div>',
        nextArrow: '<div class="hc-arrow-right"><i class="fa fa-arrow-right"></i></div>',
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
//Testimonials
    $(".our-testimonials").slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        prevArrow: '<div class="hc-arrow-left"><i class="fa fa-arrow-left"></i></div>',
        nextArrow: '<div class="hc-arrow-right"><i class="fa fa-arrow-right"></i></div>',
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    //----- OPEN POPUP
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = $(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE POPUP
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });

});