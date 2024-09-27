document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numberForm');
    const resultParagraph = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const number = parseInt(document.getElementById('number').value);

        if (isNaN(number)) {
            resultParagraph.textContent = 'Por favor, insira um número válido.';
            return;
        }

        if (number % 2 === 0) {
            resultParagraph.textContent = `O número ${number} é par.`;
        } else {
            resultParagraph.textContent = `O número ${number} é ímpar.`;
        }
    });
});
