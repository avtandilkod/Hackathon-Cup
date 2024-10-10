const nameInput = document.getElementById("firstname");
const nameRegex = /^[A-Za-z\s]+$/;
nameInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const valueLength = value.length;
  const element = document.getElementById("nameLabel");
  // const errorElement = document.getElementById("name-error");
  if (valueLength > 0) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }

  // if (valueLength < 2 || nameRegex.test(value) == false) {
  //   errorElement.style.display = "block";

  // }
  // if (valueLength >= 2 && nameRegex.test(value)) {
  //   errorElement.style.display = "none";

  // }
  // if (valueLength === 0) {
  //   errorElement.style.display = "none";

  // }
});

const emailInput = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
emailInput.addEventListener("input", function (e) {
  const errorElement = document.getElementById("email-error");
  const value = e.target.value;
  const valueLength = value.length;
  const element = document.getElementById("emailLabel");
  const domain = value.split("@")[1];
  if (valueLength > 0) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }

  // // if (emailRegex.test(value) == false || domain !== "laragori.ge") {
  // //   errorElement.style.display = "block";
  // // }
  // // if (emailRegex.test(value) && domain === "laragori.ge") {
  // //   errorElement.style.display = "none";
  // }
});

const phoneInput = document.getElementById("phone-number");
phoneInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const valueLength = value.length;
  const element = document.getElementById("phoneLabel");
  if (valueLength > 0) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const valueLength = value.length;
  const element = document.getElementById("dateLabel");
  if (valueLength > 0) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let validated = true;
  //name validation
  const nameValue = e.target[0].value;
  const nameValueLength = nameValue.length;
  const nameElement = document.getElementById("nameLabel");
  const errorNameElement = document.getElementById("name-error");

  if (nameValueLength > 0) {
    nameElement.style.display = "none";
  } else {
    nameElement.style.display = "block";
  }

  if (nameValueLength < 2 || nameRegex.test(nameValue) == false) {
    errorNameElement.style.display = "block";

    validated = false;
  }
  if (nameValueLength >= 2 && nameRegex.test(nameValue)) {
    errorNameElement.style.display = "none";
  }

  if (nameValueLength === 0) {
    errorNameElement.style.display = "block";

    validated = false;
  }
  // email validation
  const errorEmailElement = document.getElementById("email-error");
  const emailValue = e.target[1].value;
  const emailValueLength = emailValue.length;
  const emailElement = document.getElementById("emailLabel");
  const domain = emailValue.split("@")[1];

  if (emailValueLength > 0) {
    emailElement.style.display = "none";
  } else {
    emailElement.style.display = "block";
  }

  if (emailRegex.test(emailValue) == false || domain !== "laragori.ge") {
    errorEmailElement.style.display = "block";

    validated = false;
  }
  if (emailRegex.test(emailValue) && domain === "laragori.ge") {
    errorEmailElement.style.display = "none";
  }
  //phone validation
  const phoneValue = e.target[2].value;
  const phoneValueLength = phoneValue.length;
  const phoneError = document.getElementById("phone-error");
  const phoneRegex = /^[0-9]+$/;
  console.log(typeof phoneValue);
  console.log(phoneValueLength);
  console.log(phoneRegex.test(Number(phoneValue)));

  if (phoneRegex.test(phoneValue) == false || phoneValueLength < 9) {
    phoneError.style.display = "block";
    validated = false;
  }

  if (phoneValueLength === 9 && phoneRegex.test(phoneValue)) {
    phoneError.style.display = "none";
  }
  if (phoneValueLength === 0) {
    phoneError.style.display = "block";

    validated = false;
  }

  // //date validation
  // const dateValue = e.target[3].value;
  // const dateValueLength = dateValue.length;
  // const dateElement = document.getElementById("dateLabel");
  // const dateError = document.getElementById("date-error");

  // if (dateValueLength < 0) {
  //   dateError.style.display = "block";
  //   validated = false;
  // }

  // if (dateValueLength === 3) {
  //   dateError.style.display = "none";
  // }

  if (validated) {
    window.location.href = "project3.html";
  }
});

dateInput.addEventListener("focus", function () {
  const element = document.getElementById("dateLabel");
  dateInput.setAttribute("type", "date");
  element.style.display = "none";
});
dateInput.addEventListener("blur", function () {
  const element = document.getElementById("dateLabel");
  if (dateInput.value) return;
  dateInput.setAttribute("type", "text");
  element.style.display = "block";
});

function closeModal(event) {
  const modal = event.target.closest(".error");
  modal.style.display = "none";
}
const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});
