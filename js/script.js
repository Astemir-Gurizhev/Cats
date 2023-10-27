let more = document.querySelector(".cats__row__more");
let prices = document.querySelectorAll(".cats__column__price").values;
let messages = document.querySelector(".messages")
let message = document.querySelector(".message")
let columns = document.querySelectorAll('.cats__column')
let btns = document.querySelectorAll('.cats__more')
let btn = document.querySelector('.cats__more')

if (columns.length > 6) {
  hidden()
} else if (columns.length < 6) {
 btn.remove()
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".cats__column__action__like")) { 
    e.target.classList.toggle("cats__column__action__like-active"); // Like
    if (e.target.closest(".cats__column__action__like-active")) {
      messages.innerHTML += `<div class="message message-wrapper">Вы успешно добавили!</div>`
      setTimeout(function () {
        messages.firstElementChild.remove()
      }, 1500)
    }
  }
  if (e.target.closest(".cats__more")) { // Column
    if (btn.classList.contains('btnMoreActive')) {
      hidden()
    }
    else {
      visible()
    }
  }
  if (e.target.closest(".header-top__burger")) { // Burger
    document.querySelector(".header-top__menu").classList.toggle("header-top__menu-active");
    document.querySelector(".header-top__burger").classList.toggle("active");
    $("body").toggleClass("lock");
  }
});

function visible() {
  for (let i = 6; i < columns.length; i++) 
    {
      columns[i].style.display = 'block'
    }
  btn.innerHTML = `Не показывать`
  btn.classList.add('btnMoreActive')
}

function hidden() {
  for (let i = 6; i < columns.length; i++) 
    {
      columns[i].style.display = 'none'
    }
  btn.innerHTML = `Показать еще ${columns.length - 6}`
  btn.classList.remove('btnMoreActive')
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });
  $("#top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 0);
  });
});

/* Сортировка  */
let price = document.querySelector(".cats__sort__price")
let age = document.querySelector(".cats__sort__age")

price.onclick = function () {
  this.classList.add('active')
  age.classList.remove('active')
  mySort("data-price");
};
age.onclick = function () {
  this.classList.add('active')
  price.classList.remove('active')
  mySort("data-age");
};

function mySort(sortType) {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute(sortType) >
        +nav.children[j].getAttribute(sortType)
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

/* email */

const form = document.querySelector(".footer-right__form");
const formInput = document.querySelector(".footer-right__form__input");
const error = document.getElementById("error");
const formBtn = document.querySelector('.footer-right__form__btn')

formBtn.addEventListener("click", function (event) {
  if (emailTest(formInput)) {
    formInput.style.border = "2px solid red"
    event.preventDefault();
  }
});

function emailTest(formInput) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formInput.value);
}




