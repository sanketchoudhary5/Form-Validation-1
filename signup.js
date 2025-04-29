//Acess All Elemets
const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");


//Event for Submit Form
form.addEventListener("submit", (e) => {
  //e.preventDefault();

  let errors = []

  if(firstname_input) {
    //If we have a firstname input then we are in the signup form
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
  }
  else{
    //If we don't have a firstname input then we are in the login form
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if(errors.length > 0) {
    //If there are any errors
    e.preventDefault();
    error_message.innerText = errors.join(".")
  }

});

//Function for Giving SignUp Error
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if(firstname === "" || firstname == null){
    errors.push("Firstname is Required");
    firstname_input.parentElement.classList.add("incorrect");
  }

  if(email === "" || email == null){
    errors.push("Email is Required");
    email_input.parentElement.classList.add("incorrect");
  }

  if(password === "" || password == null){
    errors.push("Password is Required");
    password_input.parentElement.classList.add("incorrect");
  }

  if(password.length < 8) {
    errors.push("Password must be at least 8 characters");
    password_input.parentElement.classList.add("incorrect");
  }
  if(password !== repeatPassword) {
    errors.push("Passwords does not march repeated password");
    password_input.parentElement.classList.add("incorrect");
    repeat_password_input.parentElement.classList.add("incorrect");
  }
  return errors;
}

//Function for giving Login Error
function getLoginFormErrors(email, password) {
  let errors = [];

 if(email === "" || email == null){
    errors.push("Email is Required");
    email_input.parentElement.classList.add("incorrect");
  }

  if(password === "" || password == null){
    errors.push("Password is Required");
    password_input.parentElement.classList.add("incorrect");
  }

  return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener("input", () => {
    if(input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  })
})  