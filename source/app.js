import {Requests} from "./js/requests.js";
import "./sass/style.scss";;
import "./js/picturefill.js";
import "./js/auth.js"
import "./js/forms.js";
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBKEuMvY8ixQ2LFW9TC-b45udySFcpthjY",
  authDomain: "catenergy-9ff12.firebaseapp.com",
  databaseURL: "https://catenergy-9ff12.firebaseio.com",
  projectId: "catenergy-9ff12",
  storageBucket: "catenergy-9ff12.appspot.com",
  messagingSenderId: "585504858530",
  appId: "1:585504858530:web:9ad306243acc83ca2492fb"
});

let database = firebase.database();
let ref = database.ref("requests");
ref.on("value", function(snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let data = childSnapshot.val();
    let userName = document.getElementById("username");
    userName.innerHTML = data.name;
    console.log(data.email);
    console.log(data.name);
  });
})

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const request = {
    name:"Имя: " + name.value,
    age: "Возраст: " + age.value,
    weight: "Вес: " + weight.value,
    email: "Электронная почта: " + email.value,
    phone: "Номер телефона: " + phone.value,
    slim: "Похудение: " + slim.checked,
    getMass: "Набор массы: " + getMass.checked,
    idk: "Я не знаю (помогите с выбором): " + idk.checked,
    sweetener: "Сахарозаменитель: " + sweetener.checked,
    water: "Питьевая вода: " + water.checked,
    milk: "Молоко: " + milk.checked,
    vitamins: "Витамины: " + vitamins.checked,
    comment: "Комментарий к заявке: " + comment.value,
  }
  Requests.create(request);
}