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
const burgerBtn = document.querySelector(".header__menu-btn");
const overtlayMenu = document.querySelector(".header-top__inner");
burgerBtn.addEventListener("click", ({target}) => {
  overtlayMenu.classList.toggle("header-top__inner--active");

});*/
