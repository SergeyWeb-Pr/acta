// -----Слайдер------------

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin: 40,
    nav: true,
    loop:true,
    dots: false,
    items: 3,
    
    responsive:{
      0:{
        items:2,
        nav:false,
        autoWidth: true
      },
      768:{
        items:2,
        nav:false,
        autoWidth: true
      },
      1200:{
        items: 3,
        nav:true,
        autoWidth: false
      }
    }
  });
});

$(window).resize(function(){

  if ($(this).width() > 768) {
    $(".slider").trigger('destroy.owl.carousel');
  } else {
    $('.owl-carousell').owlCarousel({
      margin: 10,
      nav: false,
      loop:false,
      dots: false,
      items: 3,
      autoWidth: true,
      responsive:{
        0:{
          items:1,
          nav:false,
          touchDrag: true
        }
      }
      
  
    });
  }
  // $('.owl-carousell').owlCarousel({
  //   margin: 10,
  //   nav: false,
  //   loop:false,
  //   dots: false,
  //   items: 3,
  //   autoWidth: true,
  //   responsive:{
  //     0:{
  //       items:1,
  //       nav:false,
  //       touchDrag: true
  //     }
  //   }
    

  // });
});


// -----Аккордеон------------

var accread = document.getElementsByClassName("trr-o");
var i2;
for (i2 = 0; i2 < accread.length; i2++) {
	accread[i2].addEventListener("click", function() {

		if(this.previousElementSibling.classList.contains('open')){
			this.previousElementSibling.classList.remove("open");
      this.classList.remove("open2");
			this.previousElementSibling.style.maxHeight = null;
		}else{
			this.previousElementSibling.classList.add("open");
      this.classList.add("open2");
			this.previousElementSibling.style.maxHeight = this.previousElementSibling.scrollHeight + "px";
			}
		});
}

// -----Мобильное меню------------

var mobbt = document.getElementsByClassName("header-nav-obl")[0];
var nav = document.getElementsByClassName("rig-menu")[0];
mobbt.addEventListener("click", changeMob, false);
function changeMob() {
  setTimeout(function() {
    nav.classList.toggle("change2");
    mobbt.classList.toggle("change");
  }, 0);
}

// -----выпадающий список------------

let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
  
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
});

$(".dropdown").click(function(e) {
  e.preventDefault();
  // $(".dropdown").hasClass( "arrow-t" ).
  $(this).toggleClass('arrow-t');
})

// -----Ползунок-----------

jQuery('#polzunok').slider({
  animate: "slow",
  range: "min",    
  value: 50
});
// табы........

var tabs = document.querySelectorAll('.calc-service__tab');
var tabsContent = document.querySelectorAll('.calc-service__item');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(){
    for (let y = 0; y < tabs.length; y++){
      tabs[y].classList.remove("active");
      tabsContent[y].classList.remove("active");
    }
    tabs[i].classList.add("active");
    tabsContent[i].classList.add("active");
  }, false);
}
// ...........Форма удалить...............
var gopop = document.querySelectorAll('.gopop');
var gopop2 = document.querySelectorAll('.gopop2');
var gopop3 = document.querySelectorAll('.gopop3');
var questionform  =  document.getElementsByClassName("question-form")[0];
var questionforminner  =  document.getElementsByClassName("question-form-inner1")[0];
var questionforminner2  =  document.getElementsByClassName("question-form-inner2")[0];
var questionforminner3  =  document.getElementsByClassName("question-form-inner3")[0];
var closeform  =  document.getElementById("closeform");
var closeform2  =  document.getElementById("closeform2");
var closeform3  =  document.getElementById("closeform3");

closeform.addEventListener("click", closeQuestionForm, false);
closeform2.addEventListener("click", closeQuestionForm2, false);
closeform3.addEventListener("click", closeQuestionForm3, false);

for (var i = 0; i < gopop.length; i++) {
  gopop[i].addEventListener("click", openQuestionForm, false);
}
for (var i = 0; i < gopop2.length; i++) {
  gopop2[i].addEventListener("click", openQuestionForm2, false);
}
for (var i = 0; i < gopop3.length; i++) {
  gopop3[i].addEventListener("click", openQuestionForm3, false);
}

function openQuestionForm(){
  questionform.classList.add("active1");
  setTimeout(function() { 
    questionforminner.classList.add("active");
  }, 100);
}
function openQuestionForm2(){
  questionform.classList.add("active2");
  setTimeout(function() { 
    questionforminner2.classList.add("active");
  }, 100);
}
function openQuestionForm3(){
  questionform.classList.add("active3");
  setTimeout(function() { 
    questionforminner3.classList.add("active");
  }, 100);
}
function closeQuestionForm(){
  questionform.classList.remove("active1");
  questionforminner.classList.remove("active");
}
function closeQuestionForm2(){
  questionform.classList.remove("active2");
  questionforminner2.classList.remove("active");
}
function closeQuestionForm3(){
  questionform.classList.remove("active3");
  questionforminner3.classList.remove("active");
}


// -----Карта------------

//Переменная для включения/отключения индикатора загрузки
var spinner = jQuery('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [60.063321, 30.304037], // координаты центра на карте
    zoom: 14, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([60.063321, 30.304037], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '../assets/icon/point.png',
      // Размеры метки.
      iconImageSize: [29, 40],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-16, -32],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  jQuery('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
    // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
    // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
jQuery(function() {
 
  //Запускаем основную функцию
  ymap();
 
});
