// Função para mudar o texto do título
function mudarTexto() {
    const novoTexto = prompt("Digite o novo texto para o título:");
    if (novoTexto) {
        document.getElementById("titulo").textContent = novoTexto;
    }
}

// Função para mudar a cor do título
function mudarCor() {
    const titulo = document.getElementById("titulo");
    const cores = ["red", "blue", "green", "purple", "orange"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    titulo.style.color = corAleatoria;
}

// Função para adicionar um parágrafo abaixo do título
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este é um novo parágrafo adicionado abaixo do título.";
    document.getElementById("paragrafoContainer").appendChild(novoParagrafo);
}
