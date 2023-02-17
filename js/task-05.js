// const inputName = document.querySelector("#name-input");
// const outputName = document.querySelector("#name-output");

// inputNameEl.addEventListener("input", function () {
//     outputNameEl.textContent = this.value || "Anonymous";
    

//     inputName.addEventListener("input", function () {
//         if (outputName.textContent = this.value) {
//             return outputName.textContent;
//         } else {
//             return outputName.textContent = "Anonymous";
//         };
            
// });

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// nameInput.addEventListener("input",
//     () => nameOutput.textContent = nameInput.value || "Anonymous"
// );



const refs = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", onImputNameChange);

function onImputNameChange(event) {
    refs.outputName.textContent = event.currentTarget.value || "Anonymous";
};