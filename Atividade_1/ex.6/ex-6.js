document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradesForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém as notas e pesos
        const note1 = parseFloat(document.getElementById('note1').value);
        const weight1 = parseFloat(document.getElementById('weight1').value);
        const note2 = parseFloat(document.getElementById('note2').value);
        const weight2 = parseFloat(document.getElementById('weight2').value);
        const note3 = parseFloat(document.getElementById('note3').value);
        const weight3 = parseFloat(document.getElementById('weight3').value);

        // Verifica se os valores são números válidos
        if (isNaN(note1) || isNaN(weight1) || isNaN(note2) || isNaN(weight2) || isNaN(note3) || isNaN(weight3)) {
            alert('Por favor, insira valores válidos para todas as notas e pesos.');
            return;
        }

        // Calcula a média ponderada
        const totalWeight = weight1 + weight2 + weight3;
        const weightedAverage = ((note1 * weight1) + (note2 * weight2) + (note3 * weight3)) / totalWeight;

        // Exibe a média ponderada em um alert
        alert(`A média ponderada é: ${weightedAverage.toFixed(2)}`);
    });
});
