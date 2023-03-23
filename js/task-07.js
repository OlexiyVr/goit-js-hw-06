const reffs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

reffs.inputEl.addEventListener(`input`, textSize);
reffs.textEl.style.fontSize = `${reffs.inputEl.value}px`;

function textSize() {
    reffs.textEl.style.fontSize = `${reffs.inputEl.value}px`;
}
