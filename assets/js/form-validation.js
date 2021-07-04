// Form Validation

// Form Variable
const signUpForm = document.querySelector("#sign_up");
// First Name
const firstName = document.querySelector("#first-name");
// Last Name
const lastName = document.querySelector("#last-name");
// Email Address
const emailAdd = document.querySelector("#email-address");
// Password
const passWrd = document.querySelector("#password");
// Register Button
const registerBtn = document.querySelector("#register-btn");

// Signup Form Event Listener
signUpForm.addEventListener("click", validateInputFields);

// Validate Input Fields Function
function validateInputFields(e) {
    e.preventDefault();

    if (
        firstName.value === "" ||
        lastName.value === "" ||
        emailAdd.value === "" ||
        passWrd.value === ""
    ) {
        firstName.classList.add("input-danger");
        lastName.classList.add("input-danger");
        emailAdd.classList.add("input-danger");
        passWrd.classList.add("input-danger");
    }

    registerBtn.textContent = "";
    registerBtn.innerHTML = "<i class='fa fa-spinner' aria-hidden='true'></i>";

    // Validates if the values are inputted
    setTimeout(() => {
        registerBtn.innerHTML = "";
        registerBtn.classList.remove("btn-primary");
        registerBtn.innerHTML = "<i class='fas fa-check'></i>"
        registerBtn.classList.add("btn-success");
    }, 3000);
}