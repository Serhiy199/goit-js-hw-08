function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const number = document.querySelector('input');
const butCreate = document.querySelector('button[data-create]');
const butDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function handleClickCreate(event) {
    const inputNumber = number.value;
    const numberElements = Number(inputNumber);
    let width = 30;
    if (numberElements < 1 || numberElements > 100) {
        return alert('Choose a number between 1 and 100');
    }
    if (Boolean(boxes.firstElementChild)) {
        handleClickDestroy();
    }
    if (numberElements >= 1 && numberElements <= 100) {
        for (let i = 1; i <= numberElements; i++) {
            width += 10;
            const container = document.createElement('div');
            container.classList.add('container-div');
            container.style.width = `${width}px`;
            container.style.height = `${width}px`;
            container.style.backgroundColor = getRandomHexColor();
            boxes.append(container);
        }
        number.value = '';
    }
}

function handleClickDestroy(event) {
    const containerDestroy = document.querySelectorAll('div.container-div');
    for (const destroy of containerDestroy) {
        destroy.remove();
    }
}

butCreate.addEventListener('click', handleClickCreate);
butDestroy.addEventListener('click', handleClickDestroy);
