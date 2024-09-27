let tempo = 0; // Tempo em segundos
let intervalo; // Identificador do intervalo

// Função para formatar o tempo em minutos e segundos
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
    if (!intervalo) { // Verifica se o cronômetro não está já em execução
        intervalo = setInterval(() => {
            tempo++; // Incrementa o tempo
            document.getElementById("tempo").textContent = formatarTempo(tempo); // Atualiza o DOM
        }, 1000);
    }
}

// Função para pausar o cronômetro
function pausarCronometro() {
    clearInterval(intervalo); // Para o intervalo
    intervalo = null; // Reseta o identificador do intervalo
}

// Função para zerar o cronômetro
function zerarCronometro() {
    pausarCronometro(); // Para o cronômetro se estiver em execução
    tempo = 0; // Reseta o tempo
    document.getElementById("tempo").textContent = formatarTempo(tempo); // Atualiza o DOM
}
