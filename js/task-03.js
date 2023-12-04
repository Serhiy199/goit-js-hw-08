const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
let string = '';

textInput.addEventListener('input', event => {
    output.textContent = textInput.value;
    string = output.textContent;
    const strimString = string.trim();
    console.log(Boolean(strimString));

    if (strimString) {
        output.textContent = textInput.value;
    } else {
        output.textContent = 'Anonymous';
    }
});
