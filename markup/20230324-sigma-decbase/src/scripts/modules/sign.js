const form = document.querySelector("form");
let input = null;
let error = null;


const validateInput = (elem) => {
  input = elem;
  error = input.parentElement.querySelector(".field__error");  

  if (input.name === "name" || input.name === "surname") {
    return validateName();
  } 
  
  else if (input.name === "email") {
    return validateEmail();
  }
}


const makeInvalid = (message) => {
  input.classList.add("field__input--invalid");
  error.textContent = message;
}


const makeValid = () => {
  input.classList.remove("field__input--invalid");
  error.textContent = "";
}


const validateName = () => {
  // If field is empty
  if (input.value === "") {
    makeInvalid("Field can't be empty");
  }

  // If not only letters
  else if (!/^[A-Z]*$/i.test(input.value)) {
    makeInvalid("Only latin letter");
  }

  // If first letter is not uppercase
  else if (!/^[A-Z]/.test(input.value)) {
    makeInvalid("First letter must be uppercase");
  }

  // All is ok
  else {
    makeValid();
    return true;
  }

  return false;
}


const validateEmail = () => {
  // If field is empty
  if (input.value === "") {
    makeInvalid("Field can't be empty");
  }

  // If field is empty
  else if (!/^.*?@.*?\..*/.test(input.value)) {
    makeInvalid("Value must have email-template");
  }

  else {
    makeValid();
    return true;
  }

  return false;
}


form.addEventListener("input", (evt) => {
  validateInput(evt.target);
})


form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formIsValid = Array
    .from(form.querySelectorAll("input"))
    .map((input) => validateInput(input))
    .every((result) => result === true)

  if (formIsValid) {
    const data = Array
      .from(form.querySelectorAll("input"))
      .map(({name, value}) => ({name, value}))
    
    localStorage.setItem("form", JSON.stringify(data));
  }

  if (form.elements.name.value === "Roma") {
    const greeting = document.querySelector("[data-greeting]");
    const today = new Date();
    const day = today.toLocaleString("en-US", {day: "2-digit"});
    const month = today.toLocaleString("en-US", {month: "long"});
    const year = today.toLocaleString("en-US", {year: "numeric"});
    greeting.classList.add("greeting--show");
    greeting.textContent = `Only today ${day} ${month} ${year} you can get 120% discount`;

    setTimeout(() => {
      greeting.classList.remove("greeting--show");
    }, 5000)
  }
})
