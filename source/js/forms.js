let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
  input.addEventListener('blur', function() {
    let rule = this.dataset.rule;

    let value = this.value;

    let check;

    switch(rule) {
      case 'phone':
        check = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
        break;

      case 'name':
        check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(value);
        break;

      case 'email':
        check = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(value);
        break;

      case 'weight':
        check = /^([0-1]?[0-9])$/.test(value);
        break;

      case 'age':
        check = /^([0-2]?[0-9])$/.test(value);
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