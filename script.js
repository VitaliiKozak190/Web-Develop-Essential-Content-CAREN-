function Nav() {
  let mobileClick = document.getElementById("mobile_click");
  let mobileNav = document.querySelector("#mobile_nav");

  mobileClick.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}
Nav();
//

// function validateForm() {
//   document.getElementById(`nameError`).textContent = "";
//   document.getElementById(`emailError`).textContent = "";
//   document.getElementById(`messageError`).textContent = "";

//   document.getElementById(`name`).ariaValueMax.trim();
//   document.getElementById(`email`).ariaValueMax.trim();
//   document.getElementById(`message`).ariaValueMax.trim();

//   if (name === ``) {
//     document.getElementById(`nameError`).textContent = `Name is required`;
//     return false;
//   }
//   var namePattern = /^[a-zA-Z]+$/;

//   if (!namePattern.test(name)) {
//     document.getElementById(
//       `nameError`
//     ).textContent = `Name must contain only letters`;
//     return false;
//   }
//   // Counts the number of words
//   var wordCount = name.trim().split(/\s+/).length;

//   if (wordCount < 2) {
//     document.getElementById("nameError").textContent =
//       "Name must have at least two words";
//     return false;
//   }
//   // Validate email
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById(`emailError`).textContent = "Invalid email address";
//     return false;
//   }
//   // Validate message
//   if (message === ``) {
//     document.getElementById(`messageError`).textContent = "Message is required";
//     return false;
//   }

//   // Form is valid, save data to local storage
//   saveDataLocally(name, email, message);

//   // Redirect to confirmation.html
//   window.location.href = "confirmation.html";

//   return false; // Prevent the form from submitting traditionally
// }

// function saveDataLocally(name, email, message) {
//   // Create an object to represent the form data
//   var fromData = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   // Convert the object to a JSON string and save to local storage
//   localStorage.setItem("formData", JSON.stringify(formData));
// }

// function validateForm() {
function validateForm() {
  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Get input values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validate name
  var namePattern = /^[a-zA-Z\s]+$/;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return false;
  } else if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent =
      "Name must contain only letters and spaces";
    return false;
  } else if (name.split(/\s+/).length < 2) {
    document.getElementById("nameError").textContent =
      "Name must have at least two words";
    return false;
  }

  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    return false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    return false;
  }

  // Save data to local storage (optional)
  saveDataLocally(name, email, message);

  // Redirect to confirmation page (optional)
  window.location.href = "confirmation.html";

  return false; // Prevent traditional form submission
}

function saveDataLocally(name, email, message) {
  var formData = {
    name: name,
    email: email,
    message: message,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}
