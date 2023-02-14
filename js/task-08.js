 const form = document.querySelector('.login-form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (let [name, value] of formData.entries()) {
      if (!value) {
        alert(`Please fill in all fields`);
        return;
      }

      data[name] = value;
    }

    console.log(data);
    form.reset();
  });
