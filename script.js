const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseSelect = document.getElementById("course");
const termsCheckbox = document.getElementById("terms");
const outputContainer = document.getElementById("outputContainer");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error-message").forEach(el => el.classList.remove("show"));
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));

    let valid = true;

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").classList.add("show");
        nameInput.classList.add("input-error");
        valid = false;
    }

    if (!emailInput.value.includes("@")) {
        document.getElementById("emailError").classList.add("show");
        emailInput.classList.add("input-error");
        valid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").classList.add("show");
        valid = false;
    }

    if (courseSelect.value === "") {
        document.getElementById("courseError").classList.add("show");
        courseSelect.classList.add("input-error");
        valid = false;
    }

    if (!termsCheckbox.checked) {
        document.getElementById("termsError").classList.add("show");
        valid = false;
    }

    if (valid) {
        document.getElementById("outputName").textContent = nameInput.value;
        document.getElementById("outputEmail").textContent = emailInput.value;
        document.getElementById("outputGender").textContent = gender.value;
        document.getElementById("outputCourse").textContent = courseSelect.value;

        outputContainer.classList.add("show");
    }
});
