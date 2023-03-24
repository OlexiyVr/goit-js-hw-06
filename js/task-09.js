function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const reffs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector(' .change-color'),
  textEl: document.querySelector('.color'),
};


reffs.buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  reffs.bodyEl.style.backgroundColor = color;
  reffs.textEl.textContent = color;
}