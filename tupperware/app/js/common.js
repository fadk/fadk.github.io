
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
    var menuSlide = new Swiper('.swiper-container-menu', {
        slidesPerView: 'auto',
        spaceBetween: 90,
        // slidesOffsetBefore: 10,
        loop: true,
        loopedSlides: 20,
        slidesOffsetBefore: 28,
        slidesOffsetAfter: 20,
        simulateTouch: false, 
        watchOverflow: true,
        navigation: {
            nextEl: '.swiper-container-menu_next',
            prevEl: '.swiper-container-menu_prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            750: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
    });

    var tabSlide = new Swiper('.swiper-container-tabs', {
        
        simulateTouch: true, 
        watchOverflow: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            768: {
                loop: true,
                spaceBetween: 30,
            },
        },
    });


    var swiperHero = new Swiper('.swiper-container-hero', {
        loop: true,
        loopedSlides: 20,
    });

    var swiperCatalog = new Swiper('.swiper-container-catalog', {
        loopedSlides: 20,
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
            nextEl: '.swiper-button-next--big',
            prevEl: '.swiper-button-prev--big',
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
        spaceBetween: 15,
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
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
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1650: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next10',
            prevEl: '.swiper-button-prev10',
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 40,
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            1750: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1000: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            500: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
        },
        freeMode: true,
        loopedSlides: 3, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 40,
        loop:true,
        loopedSlides: 3, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next11',
            prevEl: '.swiper-button-prev11',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });


    // JQUERY NAV TOGGLE
    $('#menubtn').bind('click',function(event){
        // $('#menu').show();
        $('#menu').slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 1350) {
            $('#mainnav ul').removeAttr('style');
        }
        if(w < 650) {
            // menuSlide.destroy();
        }
    });


        var tabs = document.getElementsByClassName('tabs')

        for(let i = 0; i < tabs.length; i++) {
            for(let x = 0; x< tabs[i].children[0].children.length; x++ ) {
                tabs[i].children[0].children[x].addEventListener('click', function(e) {
                    for(let z = 0; z < tabs[i].children[0].children.length;z++) {
                        tabs[i].children[0].children[z].classList.remove("is-active")
                    }
                    for(let y = 0; y < tabs[i].nextElementSibling.children.length; y++) {
                        tabs[i].nextElementSibling.children[y].className="tab-pane"
                        if(tabs[i].nextElementSibling.children[y].id == this.children[0].id) {
                            this.className="is-active"
                            tabs[i].nextElementSibling.children[y].className="tab-pane is-active"
                        }
                    }
                })
            }
        }



        var like = $("svg.product-page__svg > *");

        like.on("click", function() {
        
          $(this).toggleClass("like-on");
          
        });
});

