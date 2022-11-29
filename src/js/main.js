import './jquery.fancybox.js';

import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

/**Не знаю куда добавить скипт для модалки */
$(document).ready(function() {
  $('.fancybox').fancybox({
      padding : 0,
      openEffect  : 'elastic',
      closeBtn: false
  });
});

/** слайждер */
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/** слайждер */
$('.certificates__slider').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function() {

  var element = $(".fixed_block");
  var height_el = element.offset().top;

  $(".fixed_block_position").css({
    "width": element.outerWidth(),
    "height": element.outerHeight()
  });

  $(window).scroll(function() {

    if($(window).scrollTop() > height_el) {

      element.addClass("fixed");

    } else {

      element.removeClass("fixed");

    }

  });

  $(document).ready(function() {

    let element_1 = $(".section1");
    let height_el_1 = element_1.offset().top;
    let flag1 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_1) {

        if(flag1){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-date');
          flag1 = false;
        }
      }
    });

    let element_2 = $(".section2");
    let height_el_2 = element_2.offset().top;
    let flag2 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_2) {

        if(flag2){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-gifts');
          flag2 = false;
        }
      }
    });


    let element_3 = $(".section3");
    let height_el_3 = element_3.offset().top;
    let flag3 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_3) {

        if(flag3){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-master');
          flag3 = false;
        }
      }
    });



    let element_4 = $(".section3__form");
    let height_el_4 = element_4.offset().top;
    let flag4 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_4) {

        if(flag4){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-form');
          flag4 = false;
        }
      }
    });



    let element_5 = $(".secLessons");
    let height_el_5 = element_5.offset().top;
    let flag5 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_5) {

        if(flag5){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-free');
          flag5 = false;
        }
      }
    });



    let element_6 = $(".secQuests");
    let height_el_6 = element_6.offset().top;
    let flag6 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_6) {

        if(flag6){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-quest');
          flag6 = false;
        }
      }
    });


    let element_7 = $(".secGift");
    let height_el_7 = element_7.offset().top;
    let flag7 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_7) {

        if(flag7){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-garant');
          flag7 = false;
        }
      }
    });


    let element_8 = $(".secSell");
    let height_el_8 = element_8.offset().top;
    let flag8 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_8) {

        if(flag8){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-paket')
          flag8 = false;
        }
      }
    });

    let element_9 = $(".secSeeYou");
    let height_el_9 = element_9.offset().top;
    let flag9 = true;

    $(window).scroll(function() {
      if($(window).scrollTop() > height_el_9) {

        if(flag9){
          ym(91364973,'reachGoal','x5paket-katok-mk-screen-last');
          flag9 = false;
        }
      }
    });







  });


  let inactivityTime = () => {
    let time;

    // сюда можно добавить любой ивент.
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);

    function resetTimer() {
      //loader.classList.add('invisible');
      clearTimeout(time);
      time = setTimeout(fn, 600000)
    }

    function fn() {
      //index.html.classList.remove('invisible');
      ym(91364973,'reachGoal','x5paket-katok-mk-nonactive');
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    inactivityTime();
  });




  $(".click-modal1").click(function(){
    $(".modal2").addClass("modalBG-active");
    ym(91364973,'reachGoal','x5paket-katok-mk-request');
  });

  $(".closeButton").click(function(){
    $(".modalBG").removeClass("modalBG-active");
  });

  $(".zapisatsa").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-zapis');
  });
  $(".startButton").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-start');
  });

  $(".oproject1").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-about');
  });

  $(".podarki2").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-gifts');
  });
  $(".masterklass3").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-master');
  });

  $(".kvest4").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-quest');
  });
  $(".paket5").click(function(){
    ym(91364973,'reachGoal','x5paket-katok-mk-paket');
  });



});



$(document).ready(function(){
  $('input[name="user-phone"]').mask('+7 (000) 000-00-00');

  $('input[name="user-email"]').inputmask("email")
});



/*
$(document).ready(function() {

  const zeroLength = 2;

  console.log('9'.padStart(zeroLength, '0'));
  console.log('27'.padStart(zeroLength, '0'));
  console.log('120'.padStart(zeroLength, '0'));

let timerShow = document.getElementById("timerTime");
let timerday = document.getElementById("timerday");
let timerShow3 = document.getElementById("timerTime2");
let timerday3 = document.getElementById("timerday2");

let timeMinut = 86400 + 43200 + 2520 + 50;
    //timeMinut = parseInt(timerInput.value) * 60


let timer = setInterval(function () {
  let seconds = timeMinut%60;
  let minutes = timeMinut/60%60;
  let  hour = timeMinut/60/60%60%24;
  let  day = timeMinut/24/60/60%60;

  seconds = seconds + "";
  seconds = seconds.padStart(zeroLength, '0')

        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        let strTimer2 = `${Math.trunc(day)}`;
        timerday.innerHTML = strTimer2;
        timerShow.innerHTML = strTimer;

        timerday3.innerHTML = strTimer2;
        timerShow3.innerHTML = strTimer;

    --timeMinut;
}, 1000)

});*/


        // класс для создание таймера обратного отсчета
     /*   class CountdownTimer {
            constructor(deadline, cbChange, cbComplete) {
                this._deadline = deadline;
                this._cbChange = cbChange;
                this._cbComplete = cbComplete;
                this._timerId = null;
                this._out = {
                    days: '', hours: '', minutes: '', seconds: '',
                    daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
                };
                this._start();
            }
            static declensionNum(num, words) {
                return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
            }
            _start() {
                this._calc();
                this._timerId = setInterval(this._calc.bind(this), 1000);
            }
            _calc() {
                const diff = this._deadline - new Date();
                const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
                const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
                const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
                const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
                this._out.days = days < 10 ? days : days;
                this._out.hours = hours < 10 ? '0' + hours : hours;
                this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
                this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
                this._out.daysTitle = CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']);
                this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']);
                this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']);
                this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
                this._cbChange ? this._cbChange(this._out) : null;
                if (diff <= 0) {
                    clearInterval(this._timerId);
                    this._cbComplete ? this._cbComplete() : null;
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {

            let hghhjhj = 1;

            const runTimer = (vgggggg) => {
                const elDays = document.querySelector('.timer__days');
                const elHours = document.querySelector('.timer__hours');
                const elMinutes = document.querySelector('.timer__minutes');
                const elSeconds = document.querySelector('.timer__seconds');

                const elDays2 = document.querySelector('.timer__days2');
                const elHours2 = document.querySelector('.timer__hours2');
                const elMinutes2 = document.querySelector('.timer__minutes2');
                const elSeconds2 = document.querySelector('.timer__seconds2');


                const day_title1 = document.querySelector('.day-title1');

                const day_title2 = document.querySelector('.day-title2');

                let deadline = Date.now();

                hghhjhj = hghhjhj - vgggggg;

                deadline = deadline + (new Date(deadline).getDay() - hghhjhj) * 86400000 + 604800000 - (60 * 1000) * 60 + 999;
                deadline = new Date(deadline);
                deadline.setHours(12, 0, 0, 0);

                new CountdownTimer(deadline, (timer) => {
                    elDays.textContent = timer.days % 7;
                    elHours.textContent = timer.hours;
                    elMinutes.textContent = timer.minutes;
                    elSeconds.textContent = timer.seconds;


                    elDays2.textContent = timer.days % 7;
                    elHours2.textContent = timer.hours;
                    elMinutes2.textContent = timer.minutes;
                    elSeconds2.textContent = timer.seconds;

                    day_title1.textContent = timer.daysTitle;
                    day_title2.textContent = timer.daysTitle;
                    //elHours.dataset.title = timer.hoursTitle;
                   // elMinutes.dataset.title = timer.minutesTitle;
                    //elSeconds.dataset.title = timer.secondsTitle;
                }, () => {
                    runTimer(7);
                });
            }
            runTimer(0);
        });
*/


