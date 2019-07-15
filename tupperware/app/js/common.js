


$(function() {

    var location = $("svg.location-icon > *");

    $('#boxclose').click(function(){
        $('.header__location-popup').addClass('display-none');
        $('.header__location-popup-triangle').addClass('display-none');
        $('#boxclose').addClass('display-none');
        location.removeClass("accent");
    });
    $('.header__location').click(function(){
        $('.header__location-popup').removeClass('display-none');
        $('.header__location-popup-triangle').removeClass('display-none');
        $('#boxclose').removeClass('display-none');
        location.addClass("accent");
    });
    


    // var location = $("svg.location-icon > *");

    // location.on("click", function() {    
    //   $(this).toggleClass("accent");
    // });


    var swiperFooter = new Swiper('.swiper-container-footer', {
        loopedSlides: 20,
        slidesPerView: 7,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 6, 
            },
            1000: {
                slidesPerView: 5, 
            },
            855: {
                slidesPerView: 4, 
            },
            680: {
                slidesPerView: 3, 
            },
            550: {
                slidesPerView: 2, 
            },
            355: {
                slidesPerView: 1, 
            },
        },
        navigation: {
            nextEl: '.swiper-button-next12',
            prevEl: '.swiper-button-prev12',
        },
    });




    var menuSlide = new Swiper('.swiper-container-menu', {
        slidesPerView: 'auto',
        spaceBetween: 75,
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
            515: {
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


    // // JQUERY NAV TOGGLE
    // $('#menubtn').bind('click',function(event){
    //     // $('#menu').show();
    //     $('#menu').slideToggle();
    // });

    // $(window).resize(function(){
    //     var w = $(window).width();
    //     if(w > 1350) {
    //         $('#mainnav ul').removeAttr('style');
    //     }
    //     if(w < 650) {
    //         // menuSlide.destroy();
    //     }
    // });


    // JQUERY NAV TOGGLE
    $('#menubtn').bind('click',function(event){
        // $('#menu').show();
        $('#menu-mobile').slideToggle();
    });
   
        // var w = $(window).width();
        // var mainnavs = $('#mainnavs')

        // if(w > 678) {
        //     menuSlide.destroy(deleteInstance, cleanStyles);
        //     mainnavs.removeClass('.swiper-container');
     
        // }

 



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
          $(this).toggleClass("accent");
        });

        var cart = $("svg.cart > *");

        cart.on("mouseover", function() {    
          $(this).addClass("accent");
        });

        cart.on("mouseleave", function() {    
            $(this).removeClass("accent");
        });

        

        $(".footer__img1").on("mouseover", function() {    
          $(".footer__hint1").addClass("display-flex");
        });

        $(".footer__img1").on("mouseleave", function() {    
            $(".footer__hint1").removeClass("display-flex");
        });

        $(".footer__img2").on("mouseover", function() {    
            $(".footer__hint2").addClass("display-flex");
        });
  
        $(".footer__img2").on("mouseleave", function() {    
              $(".footer__hint2").removeClass("display-flex");
        });

        $(".footer__img3").on("mouseover", function() {    
            $(".footer__hint3").addClass("display-flex");
        });
  
        $(".footer__img3").on("mouseleave", function() {    
              $(".footer__hint3").removeClass("display-flex");
        });

        $(".footer__img4").on("mouseover", function() {    
            $(".footer__hint4").addClass("display-flex");
        });
  
        $(".footer__img4").on("mouseleave", function() {    
            $(".footer__hint4").removeClass("display-flex");
        });
  
        $(".footer__img5").on("mouseover", function() {    
            $(".footer__hint5").addClass("display-flex");
        });
  
        $(".footer__img5").on("mouseleave", function() {    
            $(".footer__hint5").removeClass("display-flex");
        });

        $(".footer__img6").on("mouseover", function() {    
            $(".footer__hint6").addClass("display-flex");
        });
  
        $(".footer__img6").on("mouseleave", function() {    
            $(".footer__hint6").removeClass("display-flex");
        });

        $(".footer__img7").on("mouseover", function() {    
            $(".footer__hint7").addClass("display-flex");
        });
  
        $(".footer__img7").on("mouseleave", function() {    
            $(".footer__hint7").removeClass("display-flex");
        });




        // var tabTitle = $("li.is-active > *");
        // var tab = $("li > *");

        // tab.on("click", function() {    
        //     $(".change-title").html(tabTitle.text());
        // });
        

        

     

        var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);







        var err = 0;

        var inputboxNodeList = document.querySelectorAll('.inputbox__cycle');
            for (var i = 0; i < inputboxNodeList.length; i++) {
                inputboxNodeList[i].addEventListener('input', function() {
                var value = this.value; 
                var trimmedValue = value.trim();
                var errorMessage = this.parentNode.querySelector('.error__message'); 
        
                    if (this.type == 'text') {
                        if (trimmedValue.search(/^[a-zа-я \s ]*$/i) || trimmedValue == ''){
                            err = 1;
                            errorMessage.classList.remove("error__message_hide"); 
                        } 
                        else {
                            err = 0;
                            errorMessage.classList.add("error__message_hide"); 
                        }
                    }
        /*		  	else if (this.type == 'tel') {
                        if (trimmedValue.search(/^[0-9 \s ]*$/) || trimmedValue == ''){
                            err = 1;
                            errorMessage.classList.remove("error__message_hide"); 
                        } 
                        else {
                            err = 0;
                            errorMessage.classList.add("error__message_hide"); 
                        }
                    }*/
                    else if (this.type == 'email') {
                        if (trimmedValue.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || trimmedValue == ''){
                            err = 1;
                            errorMessage.classList.remove("error__message_hide"); 
                        } 
                        else {
                            err = 0;
                            errorMessage.classList.add("error__message_hide"); 
                        }
                    }
                    else if (this.type == 'url') {
                        if (trimmedValue.search(/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/) || trimmedValue == ''){
                            err = 1;
                            errorMessage.classList.remove("error__message_hide"); 
                        } 
                        else {
                            err = 0;
                            errorMessage.classList.add("error__message_hide"); 
                        }
                    }
                });
        
        };
        
        var sendForm = document.querySelector('.application__form');
        sendForm.addEventListener('submit', function(event){
            event.preventDefault();
                var form=this,
                elements=form.elements,
                element_val,
                serialize='',
                request = new XMLHttpRequest(),
                link=form.action;
        
            if (err == 0) {
                for (var j = 0; elements[j]; j++) {
                    element_val=elements[j].value;
                    serialize+='&'+elements[j].name+'='+element_val;
                    //проверка на пустую строку
                }
                request.open('POST', "form.php", true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) { 
                                        form.classList.add('form_success');
                                        //goals_form(form.id);
                                    } 
                    else { alert('Возникла ошибка! Попробуйте позже.');	}
                };
            //else if (contactValue.value.trim()=='' && siteValue.value.trim()=='') {
            //alert('выбери')
            //};
                request.onerror = function() { alert('Возникла ошибка! Попробуйте позже.'); };
        
                request.send(serialize);
            }
        })
        





});

