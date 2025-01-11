import {
  handleSubmitForm,
  handleInputCheckErorr,
  handleToggleBurger
} from './handlers.js';
import { $, $$ } from './helpers.js';

const contactsInputs = $$('.contacts-input');
for (const item of contactsInputs) {
  item.addEventListener('input', handleInputCheckErorr);
}

const rules = $('#rules');
rules.addEventListener('change', handleInputCheckErorr);

const formContacts = $('#formContacts');
formContacts.addEventListener('submit', handleSubmitForm);

const burgerButton = $('.burger');
burgerButton.addEventListener('click', handleToggleBurger);

const burgerClose = $('.burger-close');
burgerClose.addEventListener('click', handleToggleBurger);

const burgerMenuLight = $('.burger-menu-light');
burgerMenuLight.addEventListener('click', handleToggleBurger);

const burgerMenuLinks = $$('.burger-menu__link');
for (const item of burgerMenuLinks) {
  item.addEventListener('click', handleToggleBurger);
}

export { formContacts };

// Fibonachi

function nthFibo(n) {
  const array = [0, 1];
  for (let i = 1; i < n; i++) {
    array.push(array[i] + array[i - 1]);
  }
  console.log(array);
  return array.at(-2);
}
console.log(nthFibo(4));
