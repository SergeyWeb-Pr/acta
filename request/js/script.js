// -----Слайдер------------

$('.your-class').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="assets/icon/prev.png" class="reviews__arrow_left" alt="left-arrow"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="assets/icon/next.png" class="reviews__arrow_right" alt="right-arrow"></button>',
  
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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

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
var callbut  =  document.getElementsByClassName("call_but")[0];
var gopop = document.querySelectorAll('.gopop');
var questionform  =  document.getElementsByClassName("question-form")[0];
var questionforminner  =  document.getElementsByClassName("question-form-inner")[0];
var closeform  =  document.getElementById("closeform");

callbut.addEventListener("click", openQuestionForm, false);
closeform.addEventListener("click", closeQuestionForm, false);

for (var i = 0; i < gopop.length; i++) {
  gopop[i].addEventListener("click", openQuestionForm, false);
}

function openQuestionForm(){
  questionform.classList.add("active");
  setTimeout(function() { 
    questionforminner.classList.add("active");
  }, 100);
}
function closeQuestionForm(){
  questionform.classList.remove("active");
  questionforminner.classList.remove("active");
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
