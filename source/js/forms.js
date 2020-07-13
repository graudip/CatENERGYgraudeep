let inputs = document.querySelectorAll('input[data-rule]');
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM полностью загружен и разобран');
});
for (let input of inputs) {
  input.addEventListener('input', function() {
    let rule = this.dataset.rule;

    let value = this.value;
    
    let check;

    switch(rule) {
      case 'phone':
        check = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
        if (!check) {
          document.getElementById("phone").setCustomValidity("Укажите верный номер телефона!");
        }
        else {
          document.getElementById("phone").setCustomValidity("");
        }
        break;

      case 'name':
        check = true;
        check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(value);
        console.log(check);
        if (check) {
          document.getElementById("name").setCustomValidity("");
        }
        else {
          document.getElementById("name").setCustomValidity("Укажите верное имя кота!");          
        }
        break;

      case 'email':
        check = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(value);
        if (!check) {
          document.getElementById("email").setCustomValidity("Укажите верную почту!");
        }
        else {
          document.getElementById("email").setCustomValidity("");
        }
        break;

      case 'weight':
        check = /^([0-1]?[0-9])$/.test(value);
        console.log(check);
        if (!check) {
          document.getElementById("weight").setCustomValidity("Укажите вес вашего питомца!");
        }
        else {
          document.getElementById("weight").setCustomValidity("");
        }
        break;

      case 'age':
        check = /^([0-2]?[0-9])$/.test(value);
        if (!check) {
          document.getElementById("age").setCustomValidity("Укажите возраст вашего питомца!");
        }
        else {
          document.getElementById("age").setCustomValidity("");
        }
        break;
    }

    this.classList.remove('program-item__input-text_invalid');
    this.classList.remove('program-item__input-text_valid');

    if (check) {
      this.classList.add('program-item__input-text_valid');
    }

    else {
      this.classList.add('program-item__input-text_invalid');
    }
  });
}