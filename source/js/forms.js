let form = document.querySelector("#mainForm"),
    weight = form.querySelector("#weight"),
    age = form.querySelector("#age"),
    name = form.querySelector("#name"),
    phone = form.querySelector("#phone"),
    email = form.querySelector("#email"),
    modal = form.querySelector(".modal"),
    submitButton = document.getElementById("extra-button"),
    slim = form.querySelector("#slim"),
    getMass = form.querySelector("#getMass"),
    idk = form.querySelector("#idk"),
    sweetener = form.querySelector("#sweetener"),
    water = form.querySelector("#water"),
    milk = form.querySelector("#milk"),
    vitamins = form.querySelector("#vitamins"),
    comment = form.querySelector("#comment");

const errorText = {
  phone: "Укажите верный номер телефона!",
  name: "Укажите верное имя кота!",
  email: "Укажите верную почту!",
  weight: "Укажите вес вашего питомца!",
  age: "Укажите возраст вашего питомца!",
  password: "Исключите из вашего пароля спец. символы!"
};

const regExp = {
  email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
  weight: /^([0-1]?[0-9])$/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  name: /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-"]+[a-zA-Zа-яА-Я"]$/,
  age: /^([0-2]?[0-9])$/,
  password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};

let validate = function(key, value) {
  (!(regExp[key].test(value))) ? document.getElementById(key).setCustomValidity(errorText[key]) : document.getElementById(key).setCustomValidity("");
};

name.addEventListener("input", function() {
  let nameValue = name.value;
  validate("name", nameValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

email.addEventListener("input", function() {
  let emailValue = email.value;
  validate("email", emailValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

phone.addEventListener("input", function() {
  let phoneValue = phone.value;
  validate("phone", phoneValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

age.addEventListener("input", function() {
  let ageValue = age.value;
  validate("age", ageValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

weight.addEventListener("input", function() {
  let weightValue = weight.value;
  validate("weight", weightValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  modal.style.display = "flex";
  setTimeout(function() {
    modal.style.display = "none";
  }, 5000);
});

