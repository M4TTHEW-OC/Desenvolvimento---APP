// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10; // Começa com 10 tentativas

// Função para atualizar o contador de tentativas restantes no DOM
function atualizarTentativasRestantes() {
    const divTentativas = document.getElementById("tentativasRestantes");
    divTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

// Função para lidar com o palpite do usuário
function fazerPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");

    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    // Diminui o número de tentativas restantes
    tentativasRestantes--;

    // Calcula a diferença entre o palpite e o número aleatório
    const diferenca = Math.abs(numeroAleatorio - palpite);
    let feedback;

    // Verifica a proximidade do palpite
    if (diferenca === 0) {
        feedback = `Parabéns! Você acertou o número ${numeroAleatorio} com ${tentativasRestantes + 1} tentativas restantes!`;
        desativarJogo();
    } else if (diferenca <= 3) {
        feedback = "Muito quente! Você está super próximo.";
    } else if (diferenca <= 10) {
        feedback = "Quente! Você está muito próximo.";
    } else if (diferenca <= 25) {
        feedback = "Quase lá! Você está perto.";
    } else {
        feedback = "Muito longe! Tente novamente.";
    }

    // Verifica se ainda tem tentativas restantes
    setTimeout(() => {
        if (tentativasRestantes === 0) {
            mensagem.textContent = `Você perdeu! O número correto era ${numeroAleatorio}.`;
            desativarJogo();
        } else {
            mensagem.textContent = feedback + ` Você tem ${tentativasRestantes} tentativas restantes.`;
            atualizarTentativasRestantes(); // Atualiza o contador de tentativas no DOM
        }
    }, 500); // Atraso de 500ms para mostrar a mensagem
}

// Função para desativar o jogo após a vitória ou derrota
function desativarJogo() {
    document.getElementById("palpite").disabled = true;
    document.querySelector("button").disabled = true;
}

// Atualiza o contador de tentativas ao carregar a página
atualizarTentativasRestantes();
