let weight = document.querySelector("#weight"),
    age = document.querySelector("#age"),
    name = document.querySelector("#name"),
    phone = document.querySelector("#phone"),
    email = document.querySelector("#email"),
    form = document.querySelector("form"),
    modal = document.querySelector(".modal");

const errorText = {
  phone: "Укажите верный номер телефона!",
  name: "Укажите верное имя кота!",
  email: "Укажите верную почту!",
  weight: "Укажите вес вашего питомца!",
  age: "Укажите возраст вашего питомца!",
};

const regExp = {
  email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
  weight: /^([0-1]?[0-9])$/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  age: /^([0-2]?[0-9])$/,
  name: /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-" ]+[a-zA-Zа-яА-Я"]?$/,
};

let validate = function(name, value) {
  if (!(regExp[name].test(value))) {
    window[name].setCustomValidity(errorText[name]);
  }
  else {
    window[name].setCustomValidity("");
  }
};

email.addEventListener("input", function() {
  let email__value = email.value;
  validate("email", email__value);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

phone.addEventListener("input", function() {
  let phone__value = phone.value;
  validate("phone", phone__value);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

age.addEventListener("input", function() {
  let age__value = age.value;
  validate("age", age__value);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

name.addEventListener("input", function() {
  let name__value = name.value;
  validate("name", name__value);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

weight.addEventListener("input", function() {
  let weight__value = weight.value;
  validate("weight", weight__value);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  modal.style.display = "flex";
  setTimeout(function() {
    modal.style.display = "none";
  }, 5000);
});