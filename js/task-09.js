function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  changeColorButton: document.querySelector("button.change-color"),
  colorSpan: document.querySelector("span.color"),
  bodyElem: document.querySelector("body"),
};

function onClickChangeColor(event) {
  const newColor = getRandomHexColor();
  refs.bodyElem.style.backgroundColor = newColor;
  refs.colorSpan.textContent = newColor;
  
};

refs.changeColorButton.addEventListener("click", onClickChangeColor);







// const changeColorBtn = document.querySelector('button.change-color');
// const colorSpan = document.querySelector('span.color');
// const bodyEl = document.querySelector('body');

// changeColorBtn.addEventListener('click', () => {
//   const newColor = getRandomHexColor();
//   bodyEl.style.backgroundColor = newColor;
//   colorSpan.textContent = newColor;
// });












// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }
