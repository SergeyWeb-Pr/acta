const swiper = new Swiper('.swiper_hero', {

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$('.js-open-modal').click(function (event) {
    event.preventDefault();

    var modalName = $(this).attr('data-modal');
    var modal = $('.js-modal[data-modal="' + modalName + '"]');

    modal.addClass('is-show');
    $('.js-modal-overlay').addClass('is-show');
    $('body').addClass('ov_h');
});

$('.js-modal-close').click(function () {
    $(this).parent('.js-modal').removeClass('is-show');
    $('.js-modal-overlay').removeClass('is-show');
    $('body').removeClass('ov_h');
});

$('.js-modal-overlay').click(function () {
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
    $('body').removeClass('ov_h');
})


/////////////////////////////////////////
//Бургер

var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}
