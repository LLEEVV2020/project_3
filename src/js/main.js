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

  $(".click-modal1").click(function(){
    $(".modal2").addClass("modalBG-active");
  });

  $(".closeButton").click(function(){
    $(".modalBG").removeClass("modalBG-active");
  });




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

});
