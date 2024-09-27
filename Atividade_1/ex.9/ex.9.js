document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('timeForm');
    const resultParagraph = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém a quantidade de segundos inserida pelo usuário
        const totalSeconds = parseInt(document.getElementById('seconds').value, 10);

        if (isNaN(totalSeconds) || totalSeconds < 0) {
            resultParagraph.textContent = 'Por favor, insira um valor válido de segundos.';
            return;
        }

        // Calcula dias, horas, minutos e segundos
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Exibe o resultado
        resultParagraph.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
    });
});
