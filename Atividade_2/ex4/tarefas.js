// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const inputTarefa = document.getElementById("novaTarefa");
    const tarefa = inputTarefa.value;

    // Verifica se o campo não está vazio
    if (tarefa) {
        tarefas.push(tarefa); // Adiciona a tarefa ao array
        inputTarefa.value = ''; // Limpa o campo de entrada
        atualizarLista(); // Atualiza a lista no DOM
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}

// Função para remover uma tarefa
function removerTarefa(index) {
    tarefas.splice(index, 1); // Remove a tarefa do array com base no índice
    atualizarLista(); // Atualiza a lista no DOM
}

// Função para atualizar a lista de tarefas no DOM
function atualizarLista() {
    const listaDeTarefas = document.getElementById("listaDeTarefas");
    listaDeTarefas.innerHTML = ''; // Limpa a lista no DOM

    // Percorre todas as tarefas e cria os elementos para o DOM
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        // Botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "remove-btn";
        botaoRemover.onclick = () => removerTarefa(index); // Chama a função removerTarefa ao clicar

        // Adiciona o botão à lista de tarefas
        li.appendChild(botaoRemover);
        listaDeTarefas.appendChild(li); // Adiciona o item à lista
    });
}
