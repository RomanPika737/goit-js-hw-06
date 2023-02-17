
const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const userData = {
    // email: "User",
    // password: "Password",
  };

  const { elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(`Please fill in all the fields!`);
    return;
  }

  // userData.email = email.value;
  // userData.password = password.value;

  // console.log(userData);

  // event.currentTarget.reset();

  formData.forEach((value, name) => userData[name] = value);

  console.log(userData)

   event.currentTarget.reset()
}






//  const form = document.querySelector('.login-form');

//   form.addEventListener('submit', event => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const data = {};

//     for (let [name, value] of formData.entries()) {
//       if (!value) {
//         alert(`Please fill in all fields`);
//         return;
//       }

//       data[name] = value;
//     }

//     console.log(data);
//     form.reset();
//   });




