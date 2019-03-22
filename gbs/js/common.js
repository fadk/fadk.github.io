$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
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


// Modals

var rootEl = document.documentElement;
var $modals = getAll('.modal');
var $modalButtons = getAll('.modal-button');
var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
        closeModals();
        closeDropdowns();
    }
});