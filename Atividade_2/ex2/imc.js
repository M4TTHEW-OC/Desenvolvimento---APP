// Array para armazenar os dados dos usuários
let usuarios = [];

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Função para converter vírgula em ponto
function converterVirgulaParaPonto(valor) {
    return valor.replace(',', '.');
}

// Função para adicionar um usuário e calcular seu IMC
function adicionarUsuario() {
    const nome = document.getElementById("nome").value.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    let altura = document.getElementById("altura").value;

    // Converte vírgula para ponto na altura, se necessário
    altura = parseFloat(converterVirgulaParaPonto(altura));
    
    // Verifica se os campos estão preenchidos corretamente
    if (nome === "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcula o IMC do usuário
    const imc = calcularIMC(peso, altura);
    
    // Armazena o usuário no array
    const usuario = { nome, peso, altura, imc };
    usuarios.push(usuario);
    
    // Atualiza a tabela de usuários na página
    atualizarTabela();
    
    // Limpa os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}

// Função para atualizar a tabela de usuários no DOM
function atualizarTabela() {
    const tabela = document.getElementById("tabelaUsuarios").getElementsByTagName("tbody")[0];
    
    // Limpa a tabela antes de adicionar os dados novamente
    tabela.innerHTML = "";
    
    // Percorre o array de usuários e adiciona os dados na tabela
    usuarios.forEach((usuario) => {
        const novaLinha = tabela.insertRow();
        
        const celulaNome = novaLinha.insertCell(0);
        const celulaPeso = novaLinha.insertCell(1);
        const celulaAltura = novaLinha.insertCell(2);
        const celulaIMC = novaLinha.insertCell(3);
        
        celulaNome.textContent = usuario.nome;
        celulaPeso.textContent = usuario.peso;
        celulaAltura.textContent = usuario.altura;
        celulaIMC.textContent = usuario.imc;
    });
}
