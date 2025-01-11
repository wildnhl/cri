function validateForm({ name, email, message, rules }) {
  const errors = {};
  if (!name || name.length < 1) {
    errors.name = 'Имя должно быть заполнено';
  } else {
    errors.name = '';
  }

  if (!email || email.length < 1) {
    errors.email = 'Почта должна быть заполнена';
  } else if (!email.includes('@')) {
    errors.email = 'Должен присутствовать символ @';
  } else {
    errors.email = '';
  }

  if (!message || message.length < 20) {
    errors.message = 'Текстовое сообщение содержать быть не менее 20 символов';
  } else {
    errors.message = '';
  }

  if (rules === 'false') {
    errors.rules = 'Нужно согласиться с правилами';
  } else {
    errors.rules = '';
  }
  return errors;
}
export { validateForm };
