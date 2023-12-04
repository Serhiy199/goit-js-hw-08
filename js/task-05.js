function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
buttonChangeColor.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.background = randomColor;
    color.textContent = randomColor;
});
