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


// телефон заполнить полностью
let phoneText = false;
// емайл заполнить полностью
let emailText = false;

var h_form_btn = document.querySelectorAll('.btn-send');

h_form_btn.forEach(function (item) {
    formReadyClick(item);
});

function formReadyClick (btn) {

    let form = btn.closest("form");

    form.addEventListener("submit", formSendAsync2, {once: true});

    async function formSendAsync2(e){

        e.preventDefault(); // запрет на отправку стандартной формы

        formSendAsync(btn);
    }
}



async function formSendAsync(btn_child){

    let form = btn_child.closest("form");

    let error = formValidate(form);

    let formData = new FormData(form);

    if(error === 0){

        form.classList.add('_sending');
        let response = await fetch('../callback-request/index.php', {
           method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();



            if(btn_child.classList.contains('soobshit-o-nachale')){
              ym(91364973,'reachGoal','x5paket-katok-mk-send');
            }
            if(btn_child.classList.contains('zapisatsa')){
              ym(91364973,'reachGoal','x5paket-katok-mk-done');
            }


            form.reset();
            form.classList.remove('_sending');

            formMainSend();

            $(".modalBG").removeClass("modalBG-active");
            $(".modal1").addClass("modalBG-active");

            return true;

        } else {
            alert("ошибка");
        }

    } else {
        if(phoneText){
            alert('Введите ещё цифры телефона');
        } else if(emailText)  {
            alert('Введите емайл полностью');
        } else {
            alert('заполните поля');
        }
    }
    return false;
}


function formMainSend() {

        let panel = document.querySelector('body');
        let modal = document.querySelector('.modal-wrapper'); // .modal-wrapper обертка для всех модалок с задним фоном во весь экран

        let modals = document.querySelectorAll('.modal-wrapper > .modal');



        for (let modal of modals) {
            modal.classList.remove("active-modal");
        }
        //document.querySelector('.modal-thanks').classList.add("active-modal");

       // panel.classList.toggle('no-scroll');
       // modal.classList.add('modal-wrapper--open'); // добавляем этот класс .modal-wrapper--open для оберток всех модалок тогда окно откроется

}

// проверка на ошибки
function formValidate(form){
    let error = 0;

    let formReq = form.getElementsByClassName('_req');

    for (let index = 0; index < formReq.length; index++){
        const input = formReq[index];
        formRemoveError(input); // убрать класс проверки

        if(input.classList.contains('_email')){
            if(emailTest(input)){
                formAddError(input);
                error++;
            }
        }
        else if(input.classList.contains('input__mask')){
            if(phoneTest(input)){
                formAddError(input);
                error++;
                phoneText = true;
            }

        }
        else if(input.getAttribute("type") === "checkbox" && input.checked === false){
            formAddError(input);
            error++;
        } else {
            if(input.value === ''){
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}
// добавляют родители и элементу класс _error
function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

// проверка emai
function emailTest(input){
    emailText = true;
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// проверка телефона
function phoneTest(input){
    if(input.value.replace(/ +/g, ' ').trim() === "+7" ||
       input.value === '' ||
       input.value.replace(/[\+\(\)\s]/g,"").length < 12
      ){

       return true ;
    }
    return false;
}

    const formImage = document.getElementById('quiz__file');
    const formPreview = document.querySelector('.input__file-button-text');

    if(formImage){
       formImage.addEventListener('change', () => {
           uploadFile(formImage.files[0]);
        });
    }



function uploadFile(file){


    if(file.size > 4 * 1024 * 1024){
        alert('файл должен быть менее 4мб');
        return;
    }

    var reader = new FileReader();

    reader.onload = function (e){
        formPreview.innerHTML = `<span style="color: #f28d55;">Файл добавлен</span>`;
    }
    reader.onerror = function (e){
        alert('Ошибка');
    };
    reader.readAsDataURL(file);

}

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
        class CountdownTimer {
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
                    /*elDays.dataset.title = timer.daysTitle;
                    elHours.dataset.title = timer.hoursTitle;
                    elMinutes.dataset.title = timer.minutesTitle;
                    elSeconds.dataset.title = timer.secondsTitle;*/
                }, () => {
                    runTimer(7);
                });
            }
            runTimer(0);
        });



