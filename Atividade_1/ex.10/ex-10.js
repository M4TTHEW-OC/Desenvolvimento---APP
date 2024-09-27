document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('digitForm');
    const resultParagraph = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém o número inserido pelo usuário
        const number = document.getElementById('number').value.trim();

        // Verifica se o número tem exatamente 5 dígitos
        if (number.length !== 5 || isNaN(number)) {
            resultParagraph.textContent = 'Por favor, insira um número válido de cinco dígitos.';
            return;
        }

        // Separa os dígitos e adiciona espaços entre eles
        const separatedDigits = number.split('').join('   ');

        // Exibe os dígitos separados no elemento <p>
        resultParagraph.textContent = separatedDigits;
    });
});
