const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

// inputNameEl.addEventListener("input", function () {
//     outputNameEl.textContent = this.value || "Anonymous";
    
    inputNameEl.addEventListener("input", function () {
        if (outputNameEl.textContent = this.value) {
            return outputNameEl.textContent;
        } else {
            return outputNameEl.textContent = "Anonymous";
        };
            
});

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// nameInput.addEventListener("input",
//     () => nameOutput.textContent = nameInput.value || "Anonymous"
// );