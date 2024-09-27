// Inicializa o array de nomes vazio
let nomes = [];
console.log("Estado inicial do array:", nomes); // Exibe o estado inicial

// Função para adicionar três novos nomes ao final do array
function adicionarNomes() {
    for (let i = 0; i < 3; i++) {
        const nome = prompt(`Digite o nome ${i + 1}:`);
        if (nome) {
            nomes.push(nome); // Adiciona o nome ao final do array
            console.log(`Após adicionar "${nome}":`, nomes); // Exibe o estado após cada adição
        } else {
            console.log("Nome vazio não será adicionado.");
        }
    }
    document.getElementById("mensagem").textContent = `Nomes adicionados: ${nomes.join(", ")}`;
}

// Função para remover o primeiro nome do array
function removerPrimeiroNome() {
    if (nomes.length > 0) {
        const removido = nomes.shift(); // Remove o primeiro nome
        console.log(`Após remover "${removido}":`, nomes); // Exibe o estado após remover
        document.getElementById("mensagem").textContent = `Primeiro nome "${removido}" removido com sucesso!`;
    } else {
        document.getElementById("mensagem").textContent = "A lista já está vazia.";
    }
}

// Função para adicionar um nome no início do array
function adicionarNomeInicio() {
    const nome = prompt("Digite um nome para adicionar no início:");
    if (nome) {
        nomes.unshift(nome); // Adiciona o nome no início
        console.log(`Após adicionar "${nome}" no início:`, nomes); // Exibe o estado após a adição
        document.getElementById("mensagem").textContent = `Nome "${nome}" adicionado no início com sucesso!`;
    } else {
        console.log("Nome vazio não será adicionado.");
    }
}

// Função para localizar um nome específico no array
function localizarNome() {
    const nomeParaLocalizar = prompt("Digite o nome que deseja localizar:");
    if (nomeParaLocalizar) {
        const indice = nomes.indexOf(nomeParaLocalizar); // Localiza o índice do nome
        if (indice !== -1) {
            console.log(`O índice de "${nomeParaLocalizar}" é: ${indice}`);
            document.getElementById("mensagem").textContent = `O índice de "${nomeParaLocalizar}" é: ${indice}.`;
        } else {
            console.log(`"${nomeParaLocalizar}" não está no array.`);
            document.getElementById("mensagem").textContent = `Nome "${nomeParaLocalizar}" não encontrado.`;
        }
    } else {
        document.getElementById("mensagem").textContent = "Por favor, insira um nome para localizar.";
    }
}

// Função para exibir todos os nomes em uma string
function exibirNomes() {
    const nomesUnidos = nomes.join(", "); // Une os nomes em uma string
    console.log("Nomes unidos em uma string:", nomesUnidos); // Exibe a string unida
    document.getElementById("mensagem").textContent = `Nomes: ${nomesUnidos}`;
}
