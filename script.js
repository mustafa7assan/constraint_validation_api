document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.add("remove-pseudo");
  });
});

const validateEmail = () => {
  const element = email;
  const error = element.nextElementSibling;
  if (element.validity.valid) {
    error.textContent = "";
    element.classList.add("remove-pseudo");
  } else {
    element.classList.remove("remove-pseudo");
    if (element.validity.typeMismatch) {
      error.textContent = "Not valid email address.";
    } else if (element.validity.valueMissing) {
      error.textContent = "Email address is required.";
    }
  }
};

const validateCountry = () => {
  const element = country;
  const error = element.nextElementSibling;
  if (element.validity.valid) {
    error.textContent = "";
    element.classList.add("remove-pseudo");
  } else {
    element.classList.remove("remove-pseudo");
    if (element.validity.valueMissing) {
      error.textContent = "Country is required.";
    }
  }
};

const validateZipCode = () => {
  const element = zipCode;
  const error = element.nextElementSibling;
  if (isNaN(element.value) && element.value !== "") {
    error.textContent = "Zip code must be a numeric value.";
    zipCode.classList.remove("remove-pseudo");
  } else if (element.validity.valid) {
    error.textContent = "";
    zipCode.classList.add("remove-pseudo");
  } else {
    zipCode.classList.remove("remove-pseudo");
    if (element.validity.valueMissing) {
      error.textContent = "Zip code is required";
    } else if (element.validity.tooLong) {
      error.textContent = "Zip code length should be <= 5 numbers";
    } else if (typeof zipCode.value !== "number") {
      error.textContent = "Zip code must be numeric value.";
    }
  }
};

const validatePassword = () => {
  const element = password;
  const error = element.nextElementSibling;

  if (element.validity.valid) {
    error.textContent = "";
    element.classList.add("remove-pseudo");
  } else {
    element.classList.remove("remove-pseudo");
    if (element.validity.valueMissing) {
      error.textContent = "Password is required";
    } else if (element.validity.tooShort) {
      error.textContent = "Password should be at least 8 character.";
    }
  }
};

const validatePasswordConfirm = () => {
  const element = passwordConfirmation;
  const error = element.nextElementSibling;
  let valid;
  if (element.validity.valid) {
    error.textContent = "";
    element.classList.add("remove-pseudo");
    valid = true;
  } else {
    element.classList.remove("remove-pseudo");
    if (element.validity.valueMissing) {
      error.textContent = "Password Confirmation is required";
    } else if (element.validity.tooShort) {
      error.textContent = "Password should be at least 8 character.";
    }
  }

  if (valid) {
    if (password.value !== element.value) {
      element.classList.remove("remove-pseudo");
      error.textContent = "Passwords is not matched";
    }
  }
};

const from = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#pwd");
const passwordConfirmation = document.querySelector("#pwd-com");
email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
zipCode.addEventListener("input", validateZipCode);
password.addEventListener("input", validatePassword);

passwordConfirmation.addEventListener("input", validatePasswordConfirm);

from.addEventListener("submit", (e) => {
  if (
    email.validity.valid &&
    country.validity.valid &&
    zipCode.validity.valid &&
    password.validity.valid &&
    passwordConfirmation.validity.valid
  ) {
    alert("All Data is Valid");
  } else {
    e.preventDefault();
    if (!email.validity.valid) {
      validateEmail();
    }
    if (!country.validity.valid) {
      validateCountry();
    }
    if (!zipCode.validity.valid) {
      validateZipCode();
    }
    if (!password.validity.valid) {
      validatePassword();
    }
    if (!passwordConfirmation.validity.valid) {
      validatePasswordConfirm();
    }
  }
});
