


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

      let section3 = document.querySelector('.section3__form');
      section3.classList.add("section3__form-none");

      let section3_form_none = document.querySelector('.section3__form-none');
      section3_form_none.style.display = "none";
    }

  }

  setTimeout(Vizov, 650);


}

$(document).ready(function(){

  VizovStart();

});






//$('#q').load('https://putin-centre.ru body');
