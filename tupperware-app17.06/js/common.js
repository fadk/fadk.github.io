
$(function() {
    $('#boxclose').click(function(){
        $('.header__location-popup').addClass('display-none');
        $('.header__location-popup-triangle').addClass('display-none');
        $('#boxclose').addClass('display-none');
    });
    $('.header__location').click(function(){
        $('.header__location-popup').removeClass('display-none');
        $('.header__location-popup-triangle').removeClass('display-none');
        $('#boxclose').removeClass('display-none');
    });


    var swiperCatalog = new Swiper('.swiper-container-catalog', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1000: {
                slidesPerColumn: 1,
            },
            750: {
                slidesPerColumn: 1,
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiperBestsellers = new Swiper ('.swiper-container-bestsellers', {
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            1475: {
                slidesPerView: 3,
            },
            900: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
    });

    var swiperReviews = new Swiper ('.swiper-container-reviews', {
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

    var swiperRecent = new Swiper ('.swiper-container-recent', {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
    });

    var swiperRecent1 = new Swiper ('.swiper-container-recent1', {
        slidesPerView: 5,
        loop: true,
        breakpoints: {
            1475: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
        },
    });

    var swiperCatalogPage = new Swiper ('.swiper-container-catalog-page1', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next5',
            prevEl: '.swiper-button-prev5',
        },
    });

    var swiperCatalogPage1 = new Swiper ('.swiper-container-catalog-page2', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next6',
            prevEl: '.swiper-button-prev6',
        },
    });

    var swiperCatalogPage2 = new Swiper ('.swiper-container-catalog-page3', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next7',
            prevEl: '.swiper-button-prev7',
        },
    });

    var swiperCatalogPage3 = new Swiper ('.swiper-container-catalog-page4', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next8',
            prevEl: '.swiper-button-prev8',
        },
    });

    var swiperCatalogPage4 = new Swiper ('.swiper-container-catalog-page5', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next9',
            prevEl: '.swiper-button-prev9',
        },
    });

    var swiperCatalogPage5 = new Swiper ('.swiper-container-catalog-page6', {
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next10',
            prevEl: '.swiper-button-prev10',
        },
    });

    // JQUERY NAV TOGGLE
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 1350) {
            $('#mainnav ul').removeAttr('style');
        }
    });
});