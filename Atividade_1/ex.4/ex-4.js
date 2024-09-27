document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('phraseForm');
    const wordCountParagraph = document.getElementById('wordCount');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const phrase = document.getElementById('phrase').value.trim();
        
        // Verifica se a frase não está vazia
        if (phrase === '') {
            wordCountParagraph.textContent = 'Por favor, digite uma frase.';
            return;
        }

        // Divide a frase em palavras e conta o número de palavras
        const words = phrase.split(/\s+/);
        const wordCount = words.length;
        
        wordCountParagraph.textContent = `Número de palavras: ${wordCount}`;
    });
});
