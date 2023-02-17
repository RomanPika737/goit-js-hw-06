// const fontSizeControl = document.querySelector('#font-size-control');
//   const text = document.querySelector('#text');

//   fontSizeControl.addEventListener('input', () => {
//     text.style.fontSize = `${fontSizeControl.value}px`;
//   });

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onfontSizeControl);

function onfontSizeControl(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
};
