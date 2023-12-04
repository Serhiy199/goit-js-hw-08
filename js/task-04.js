const registerForm = document.querySelector('form');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formEmail = form.elements.email.value;
    const formPassword = form.elements.password.value;
    const objectForm = {
        email: '',
        password: '',
    };
    if (formEmail === '' || formPassword === '') {
        return alert('All form fields must be filled in');
    } else {
        objectForm.email = formEmail.trim();
        objectForm.password = formPassword.trim();
        console.log(objectForm);
    }
    form.reset();
}
registerForm.addEventListener('submit', handleSubmit);
