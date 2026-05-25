const button = document.querySelector('#changecolor');
const message = document.querySelector('#message');

const color = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'];

let clickCount = 0;

function changeBackground() {
    const randomColor = color[Math.floor(Math.random() * color.length)];

    document.body.style.backgroundColor = randomColor;

    clickCount++;
    message.textContent = `Фон изменен ${clickCount} раз(а)`;
}

button.addEventListener('click', changeBackground);