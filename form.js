const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent redirect
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert("Thanks for contacting!");
          form.reset(); // Clear form fields
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(error => {
        alert("Error occurred!");
        console.error(error);
      });
  });