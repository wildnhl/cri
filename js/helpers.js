function isEmptyErrors(object) {
  for (let key in object) {
    if (object[key] !== '') return false;
  }
  return true;
}
function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
export { isEmptyErrors, $, $$ };
