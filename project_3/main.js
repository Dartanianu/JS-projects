const form = document.querySelector('#calc');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = Number(document.querySelector('#num1').value) || 0;
    const num2 = Number(document.querySelector('#num2').value) || 0;
    const sum = num1 + num2;
    
    result.textContent = `Сумма ${sum}`;
});