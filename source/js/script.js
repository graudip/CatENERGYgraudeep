let inputs = document.querySelectorAll("input[data-rule]");
let errorText = {
  error1: "Укажите верный номер телефона!",
  error2: "Укажите верное имя кота!",
  error3: "Укажите верную почту!",
  error4: "Укажите вес вашего питомца!",
  error5: "Укажите возраст вашего питомца!",
}




for (let input of inputs) {
  input.addEventListener("input", function() {
    let rule = this.dataset.rule;

    let value = this.value;
    
    let check;

    switch(rule) {
      case "phone":
        check = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
        if (!check) {
          document.getElementById("phone").setCustomValidity(errorText.error1);
        }
        else {
          document.getElementById("phone").setCustomValidity("");
        }
        break;

      case "name":
        check = true;
        check = /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-" ]+[a-zA-Zа-яА-Я"]?$/.test(value);
        if (check) {
          document.getElementById("name").setCustomValidity("");
        }
        else {
          document.getElementById("name").setCustomValidity(errorText.error2);          
        }
        break;

      case "email":
        check = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(value);
        if (!check) {
          document.getElementById("email").setCustomValidity(errorText.error3);
        }
        else {
          document.getElementById("email").setCustomValidity("");
        }
        break;

      case "weight":
        check = /^([0-1]?[0-9])$/.test(value);
        if (!check) {
          document.getElementById("weight").setCustomValidity(errorText.error4);
        }
        else {
          document.getElementById("weight").setCustomValidity("");
        }
        break;

      case "age":
        check = /^([0-2]?[0-9])$/.test(value);
        if (!check) {
          document.getElementById("age").setCustomValidity(errorText.error5);
        }
        else {
          document.getElementById("age").setCustomValidity("");
        }
        break;
    }

    this.classList.remove("program-item__input-text_invalid");
    this.classList.remove("program-item__input-text_valid");

    if (check) {
      this.classList.add("program-item__input-text_valid");
    }

    else {
      this.classList.add("program-item__input-text_invalid");
    }
  });
}