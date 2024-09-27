function verificarHabilitacao() {
    // Obtém o valor dos campos de idade e carteira de motorista
    const idade = document.getElementById("idade").value;
    const temCarteira = document.getElementById("carteira").checked;
    
    // Seleciona o local para exibir a mensagem de resultado
    const resultado = document.getElementById("resultado");
    
    // Verifica as condições e exibe a mensagem no DOM
    if (idade >= 18 && temCarteira) {
        resultado.textContent = "Você pode dirigir.";
        resultado.style.color = "green";
    } else if (idade >= 18 && !temCarteira) {
        resultado.textContent = "Você não pode dirigir, pois não possui carteira de motorista.";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "Você não pode dirigir, pois é menor de idade.";
        resultado.style.color = "red";
    }
}
