document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wordForm');
    const uppercaseParagraph = document.getElementById('uppercase');
    const lowercaseParagraph = document.getElementById('lowercase');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const word = document.getElementById('word').value.trim();

        if (word === '') {
            uppercaseParagraph.textContent = 'Por favor, insira uma palavra.';
            lowercaseParagraph.textContent = '';
            return;
        }

        const uppercaseWord = word.toUpperCase();
        const lowercaseWord = word.toLowerCase();

        uppercaseParagraph.textContent = `Em maiúsculas: ${uppercaseWord}`;
        lowercaseParagraph.textContent = `Em minúsculas: ${lowercaseWord}`;
    });
});
