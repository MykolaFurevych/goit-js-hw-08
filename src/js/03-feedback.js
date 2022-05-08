import throttle from 'lodash.throttle';

const FORM_STATE = 'feedback-form-state';
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onSubmitForm);

onSaveInput();

function onInputForm() {
  let savedForm = {
    email: '',
    message: '',
  };
  savedForm.email = inputEl.value;
  savedForm.message = textareaEl.value;

  localStorage.setItem(FORM_STATE, JSON.stringify(savedForm));
}

function onSaveInput() {
  const newMessage = JSON.parse(localStorage.getItem(FORM_STATE));

  if (newMessage) {
    inputEl.value = newMessage.email;
    textareaEl.value = newMessage.message;
    console.log(newMessage);
  }
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_STATE)));
  localStorage.removeItem(FORM_STATE);
  formEl.reset();
}
