const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});



// const refs = {
//   decrementButton: document.querySelector('[data-action="decrement"]'),
//   incrementButton: document.querySelector('[data-action="increment"]'),
//   valueSpan: document.querySelector("#value"),
// };

// let counterValue = 0;

// refs.decrementButton.addEventListener("click", onDecrementButtonClick);
// refs.incrementButton.addEventListener("click", onIncrementButtonClick);

// function onDecrementButtonClick(event) {
//   counterValue -= 1;
//   refs.valueSpan.textContent = counterValue;
// };

// function onIncrementButtonClick(event) {
//   counterValue += 1;
//   refs.valueSpan.textContent = counterValue;
// };