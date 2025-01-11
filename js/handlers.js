import { isEmptyErrors, $ } from './helpers.js';
import { validateForm } from './validate.js';

function handleSubmitForm(event) {
  event.preventDefault();
  const formFields = {};
  const formData = new FormData(this);

  if ($('#rules').checked) {
    formData.append('rules', true);
  } else {
    formData.append('rules', false);
  }
  for (let [key, value] of formData.entries()) {
    formFields[key] = value;
  }
  const errors = validateForm(formFields);
  if (isEmptyErrors(errors)) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formFields),
      headers: {
        'Content-type': 'application/json'
      }
    });
  } else {
    for (const key in errors) {
      $(`#${key}Error`).innerHTML = errors[key];
    }
    console.log('Форма не отправлена');
  }
}

function handleInputCheckErorr(event) {
  const field = event.target.name;
  const formFields = {};
  if (event.target.type === 'checkbox') {
    formFields[field] = '';
  } else {
    formFields[field] = event.target.value;
  }

  const errors = validateForm(formFields);
  if (isEmptyErrors(errors)) {
    event.target.innerHTML = '';
  } else {
    event.target.innerHTML = field;
    $(`#${field}Error`).innerHTML = errors[field];
  }
}

function handleToggleBurger() {
  const windowWidthFull = window.innerWidth;
  const windowWidthReal = document.documentElement.clientWidth;
  const burgerMenu = $('#burgerMenu');
  if (!burgerMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${windowWidthFull - windowWidthReal}px`;
  } else {
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight = `0`;
  }
  burgerMenu.classList.toggle('active');
  $('.burger-menu-light').classList.toggle('active-light');
}

export { handleSubmitForm, handleInputCheckErorr, handleToggleBurger };
