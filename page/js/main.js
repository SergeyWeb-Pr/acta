var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,

});

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 6,
    spaceBetween: 8,
    initialSlide: 2,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2,
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

! function (e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
        return Boolean(o[n])
    }), "function" != typeof e.closest && (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function (e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready