
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

function createBoxes(nunber) {
  let size = 30;
  for (let i = 0; i <= nunber; i += 1) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.appendChild(box);
    size += 10;
  }
};

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
  // refs.boxesContainer.remove();
};

function onClickCreateBoxes(event) {
  const nunber = refs.input.value;
  createBoxes(nunber);
}

refs.createButton.addEventListener('click', onClickCreateBoxes);

function onClickDestroyBoxes(event) {
  destroyBoxes();
}

refs.destroyButton.addEventListener('click', onClickDestroyBoxes);




























// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const input = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');

// function createBoxes(amount) {
//   let size = 30;
//   for (let i = 0; i <= amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = size + 'px';
//     box.style.height = size + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// createBtn.addEventListener('click', () => {
//   const amount = input.value;
//   createBoxes(amount);
// });

// destroyBtn.addEventListener('click', () => {
//   destroyBoxes();
// });


