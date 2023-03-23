const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validData);

function validData(evt) {
  inputEl.classList.remove('valid');
  inputEl.classList.remove('invalid');

  inputEl.getAttribute('data-length') == evt.currentTarget.value.length
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}