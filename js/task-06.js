const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});







// const ref = {
//     inputEl: document.querySelector("#validation-input"),
// };
// // console.log(inputEl);
// ref.inputEl.addEventListener("blur", onInputCheckData);


// function onInputCheckData(event) {
//     if (ref.inputEl.value.length === Number(event.currentTarget.dataset.length)) {
//         ref.inputEl.classList.remove("invalid");
//         ref.inputEl.classList.add("valid");
//     } else {
//         ref.inputEl.classList.remove("valid");
//         ref.inputEl.classList.add("invalid");
//     }
// };