$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
        dots: true,
        nav: true,
        lazyLoad: true,
        video: true,
        navText: ['<svg width="33" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M20.5 25L12 16.5 20.5 8" stroke="#fff" stroke-miterlimit="10" stroke-linejoin="bevel"/>' +
        '<path d="M31.999 16.5c0-8.56-6.94-15.5-15.5-15.5C7.94 1 1 7.94 1 16.5c0 8.56 6.94 15.499 15.5 15.499 8.56 0 15.499-6.94 15.499-15.5z" stroke="#fff" stroke-miterlimit="10"/></svg>',

        '<svg width="33" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12.5 7.999l8.5 8.5-8.5 8.5" stroke="#fff" stroke-miterlimit="10" stroke-linejoin="bevel"/>' +
        '<path d="M1 16.5c0 8.56 6.94 15.499 15.5 15.499 8.56 0 15.499-6.94 15.499-15.5C31.999 7.94 25.059 1 16.499 1 7.94 1 1 7.94 1 16.5z" stroke="#fff" stroke-miterlimit="10"/></svg>'
        ]
    });
});

$(function () {
    $('.menu-list a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});


$(function () {
    $('.navbar-menu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});