document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('interestForm');
    const resultParagraph = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém os valores inseridos pelo usuário
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100; // Convertendo para decimal
        const time = parseFloat(document.getElementById('time').value);

        // Verifica se os valores são números válidos e não negativos
        if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate < 0 || time <= 0) {
            resultParagraph.textContent = 'Por favor, insira valores válidos e positivos.';
            return;
        }

        // Calcula o rendimento com juros simples
        const interest = principal * rate * time;
        const totalAmount = principal + interest;

        // Exibe o rendimento e o valor total
        resultParagraph.textContent = `Rendimento: R$ ${interest.toFixed(2)}, Valor Total: R$ ${totalAmount.toFixed(2)}`;
    });
});
