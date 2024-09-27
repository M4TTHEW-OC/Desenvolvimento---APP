document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('textForm');
    const displayText = document.getElementById('displayText');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém o texto inserido pelo usuário
        const userInput = document.getElementById('textInput').value.trim();

        if (userInput === '') {
            alert('Por favor, insira um texto.');
            return;
        }

        // Exibe o texto dentro do elemento <h1>
        displayText.textContent = userInput;
    });
});
