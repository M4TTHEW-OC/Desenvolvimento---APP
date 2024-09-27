function alterarCorParagrafos() {
    // Seleciona todos os parágrafos
    const paragrafos = document.querySelectorAll('p');
    
    // Obtém a cor escolhida pelo usuário
    const corEscolhida = document.getElementById('corEscolhida').value;

    // Percorre cada parágrafo e altera a cor
    paragrafos.forEach(paragrafo => {
        paragrafo.style.color = corEscolhida;
    });
}
