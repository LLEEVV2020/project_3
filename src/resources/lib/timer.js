var endDate = new Date(2022, 11, 5, 12, 0, 0, 0).getTime();
var endDateArr = [
  new Date(2022, 11, 2, 11, 0, 0, 0).getTime(),  // 2 декабря 2022 года
  new Date(2022, 11, 5, 12, 0, 0, 0).getTime(),  // 5 декабря 2022 года
  new Date(2022, 11, 6, 12, 0, 0, 0).getTime(),  // 6 декабря 2022 года
  new Date(2022, 11, 7, 12, 0, 0, 0).getTime(),  // 7 декабря 2022 года
  new Date(2022, 11, 8, 12, 0, 0, 0).getTime(),  // 8 декабря 2022 года
  new Date(2022, 11, 9, 12, 0, 0, 0).getTime(),  // 9 декабря 2022 года
  new Date(2022, 11, 12, 12, 0, 0, 0).getTime(), // 12 декабря 2022 года
  new Date(2022, 11, 13, 12, 0, 0, 0).getTime(), // 13 декабря 2022 года
  new Date(2022, 11, 14, 12, 0, 0, 0).getTime(), // 14 декабря 2022 года
  new Date(2022, 11, 15, 12, 0, 0, 0).getTime(), // 15 декабря 2022 года
  new Date(2022, 11, 16, 12, 0, 0, 0).getTime(), // 16 декабря 2022 года
  new Date(2022, 11, 19, 12, 0, 0, 0).getTime(),  // 19 декабря 2022 года
  new Date(2022, 11, 20, 12, 0, 0, 0).getTime(),  // 20 декабря 2022 года
  new Date(2022, 11, 21, 12, 0, 0, 0).getTime(),  // 21 декабря 2022 года
  new Date(2022, 11, 22, 12, 0, 0, 0).getTime(),  // 22 декабря 2022 года
  new Date(2022, 11, 23, 12, 0, 0, 0).getTime(),  // 23 декабря 2022 года
  new Date(2022, 11, 26, 12, 0, 0, 0).getTime(), // 26 декабря 2022 года
  new Date(2022, 11, 27, 12, 0, 0, 0).getTime(), // 27 декабря 2022 года
  new Date(2022, 11, 28, 12, 0, 0, 0).getTime(), // 28 декабря 2022 года
  new Date(2022, 11, 29, 12, 0, 0, 0).getTime(), // 29 декабря 2022 года
  new Date(2022, 11, 30, 12, 0, 0, 0).getTime(), // 30 декабря 2022 года
  //new Date(2023, 0, 2, 12, 0, 0, 0).getTime(), // 2 января 2023 года
  //new Date(2023, 0, 3, 12, 0, 0, 0).getTime(), // 3 января 2023 года
 // new Date(2023, 0, 4, 12, 0, 0, 0).getTime(), // 4 января 2023 года
  //new Date(2023, 0, 5, 12, 0, 0, 0).getTime(), // 5 января 2023 года
  new Date(2023, 0, 6, 12, 0, 0, 0).getTime() // 6 января 2023 года
];

function createLabel(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
}
let indexArr = 0;
var timer = setInterval(function() {
  let now = new Date().getTime();

  let t = endDateArr[indexArr] - now;

  if (t < 0) {
      indexArr++;
      t = endDateArr[indexArr] - now;
  }

  if (t >= 0) {

      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      const elDays = document.querySelector('.timer__days');
      const elHours = document.querySelector('.timer__hours');
      const elMinutes = document.querySelector('.timer__minutes');
      const elSeconds = document.querySelector('.timer__seconds');

      const elDays2 = document.querySelector('.timer__days2');
      const elHours2 = document.querySelector('.timer__hours2');
      const elMinutes2 = document.querySelector('.timer__minutes2');
      const elSeconds2 = document.querySelector('.timer__seconds2');

      elDays.textContent = days + "";
      elHours.textContent = ("0"+hours).slice(-2) + "";
      elMinutes.textContent = ("0"+mins).slice(-2) + "";
      elSeconds.textContent = ("0"+secs).slice(-2) + "";

      elDays2.textContent = days + "";
      elHours2.textContent = ("0"+hours).slice(-2) + "";
      elMinutes2.textContent = ("0"+mins).slice(-2) + "";
      elSeconds2.textContent = ("0"+secs).slice(-2) + "";

      let day =  createLabel(days, ['день', 'дня', 'дней']);

      const day_title1 = document.querySelector('.day-title1');
      const day_title2 = document.querySelector('.day-title2');

      day_title1.textContent = day;
      day_title2.textContent = day;

  }

}, 1000);


var how_many_seats = document.querySelectorAll('.how-many-seats');
var seats = document.querySelector('.seats');

how_many_seats.forEach(function (item) {
  item.addEventListener("click", ({target}) => {
    //console.log(item);
    seats.textContent = item.dataset.value;

    //seats.innerHTML = active__time_visible.dataset.value;
    let mesto_text = document.querySelector('.mesto');
    let mesto = createLabel(Number(item.dataset.value), ['место', 'места', 'мест']);
    mesto_text.innerHTML = mesto;

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

    form.addEventListener("submit", formSendAsync2, {once: false});

    async function formSendAsync2(e){

        e.preventDefault(); // запрет на отправку стандартной формы

      if(btn.classList.contains('soobshit-o-nachale')){
          formSendAsync(btn);
      }
      if(btn.classList.contains('zapisatsa')){

        let flag_povtorenie_tel_mail = false;

        getElement('https://pro-dex.ru/1.php', '.phones-mails', function(elements) {
          let idsection3 = btn.closest("#idsection3");

          var phone_click = idsection3.querySelector('.phone_click');

          var phones = elements.querySelector('.phones');

          for (let element of phones.children) {

            if(phone_click.value === element.innerHTML){
              $(".modal4").addClass("modalBG-active");

              flag_povtorenie_tel_mail = true;
            }

           }


          var phone_click = idsection3.querySelector('._email');
          var mails = elements.querySelector('.mails');

          for (let element of mails.children) {

            console.log(phone_click.value);
            console.log(element.innerHTML);

            if(phone_click.value === element.innerHTML){
              $(".modal4").addClass("modalBG-active");

              flag_povtorenie_tel_mail = true;
            }

           }

          if(!flag_povtorenie_tel_mail){
            formSendAsync(btn);
          }

        });


        /*getElement('https://pro-dex.ru/1.php', '.mails', function(elements) {
          let idsection3 = btn.closest("#idsection3");
          var phone_click = idsection3.querySelector('._email');

          for (let element of elements.children) {

            console.log(phone_click.value);
            console.log(element.innerHTML);

            if(phone_click.value === element.innerHTML){
              $(".modal4").addClass("modalBG-active");

              flag_povtorenie_tel_mail = true;
            }

           }

          if(!flag_povtorenie_tel_mail){
            formSendAsync(btn);
          }

        });*/


      }

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

            if(btn_child.classList.contains('soobshit-o-nachale')){
              ym(91364973,'reachGoal','x5paket-katok-mk-send');

              $(".modal3").addClass("modalBG-active");
            }
            if(btn_child.classList.contains('zapisatsa')){
              ym(91364973,'reachGoal','x5paket-katok-mk-done');

              $(".modal1").addClass("modalBG-active");
            }

            VizovStart();

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

const formPreview2 = document.querySelector('.phone_click');

formPreview2.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    alert('Отменить!')
  }

  if(this.value.replace(/[\+\(\)\s]/g,"").length >= 11){

    let zapisatsa  = document.querySelector('.zapisatsa ');

    zapisatsa.classList.add('btn__active');

  }

});



function getElement(url, selector, c) {
  request(new XMLHttpRequest());

  function request(xhr) {
      xhr.open('GET', '' + url, true);
      xhr.send();
      xhr.onreadystatechange = function() {
          if(xhr.readyState == 4) {
              if(xhr.status == 200) {
                  html = document.createElement('div');
                  html.innerHTML = xhr.responseText;
                  c(html.querySelector(selector));
              }
          }
      }
  }
}


function VizovStart(){


  getElement('https://pro-dex.ru/1.php', '.question-hyperlink1', function(element) {
    //console.log(element);
    let zapisatsa  = document.querySelector('.seats-10-00');
    zapisatsa.dataset.value = element.innerHTML;
  });

  getElement('https://pro-dex.ru/1.php', '.question-hyperlink2', function(element) {
      //console.log(element.innerHTML);
      let zapisatsa  = document.querySelector('.seats-11-15');
      zapisatsa.dataset.value = element.innerHTML;
  });

  getElement('https://pro-dex.ru/1.php', '.question-hyperlink3', function(element) {
    console.log(element);
  });




  function Vizov() {

    /** Проверка на наличие мест */
    var how_seatsis = document.querySelectorAll('.how-many-seats');

    how_seatsis.forEach(function (item) {

      if(Number(item.dataset.value) < 1){
        item.removeAttribute('checked');
        let parent = item.closest('.day-active__time');
        parent.classList.remove("day-active__time--visible");
      }

    });

    let active__time_visible = document.querySelector('.day-active__time--visible input');
    if(active__time_visible !== null){
      active__time_visible.checked = true;
      let seats  = document.querySelector('.seats');
      seats.innerHTML = active__time_visible.dataset.value;

      //createLabel(Number(active__time_visible.dataset.value), ['место', 'места', 'мест']);

      let mesto_text = document.querySelector('.mesto');
      let mesto = createLabel(Number(active__time_visible.dataset.value), ['место', 'места', 'мест']);
      mesto_text.innerHTML = mesto;

    }



    var how_seatsis = document.querySelectorAll('.day-active__time--visible');
    if(how_seatsis.length == 0){

      let section3 = document.querySelector('.section3');
      section3.classList.add("section3__form-none");
    }

  }

  setTimeout(Vizov, 500);


}

$(document).ready(function(){

  VizovStart();

});






//$('#q').load('https://putin-centre.ru body');
