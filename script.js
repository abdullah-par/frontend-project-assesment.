const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const courseSelect = document.getElementById('course');
const termsCheckbox = document.getElementById('terms');
const outputContainer = document.getElementById('outputContainer');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(err => err.classList.remove('show'));
    document.querySelectorAll('.input-error').forEach(inp => inp.classList.remove('input-error'));

    let isValid = true;

    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').classList.add('show');
        nameInput.classList.add('input-error');
        isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
        document.getElementById('emailError').classList.add('show');
        emailInput.classList.add('input-error');
        isValid = false;
    }

    const genderInputs = document.getElementsByName('gender');
    let selectedGender = '';

    for (let g of genderInputs) {
        if (g.checked) {
            selectedGender = g.value;
        }
    }

    if (selectedGender === '') {
        document.getElementById('genderError').classList.add('show');
        isValid = false;
    }

    if (courseSelect.value === '') {
        document.getElementById('courseError').classList.add('show');
        courseSelect.classList.add('input-error');
        isValid = false;
    }

    if (!termsCheckbox.checked) {
        document.getElementById('termsError').classList.add('show');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('outputName').textContent = nameInput.value;
        document.getElementById('outputEmail').textContent = emailInput.value;
        document.getElementById('outputGender').textContent = selectedGender;
        document.getElementById('outputCourse').textContent = courseSelect.value;

        outputContainer.classList.add('show');
    }
});
