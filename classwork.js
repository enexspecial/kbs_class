const toggleForm = () => {
    let formContainer = document.getElementById('form-section')
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block"
    } else {
        formContainer.style.display = "none";
    }

}

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    submitForm();
});

const submitForm = () => {
    alert("Form Submitted");
}