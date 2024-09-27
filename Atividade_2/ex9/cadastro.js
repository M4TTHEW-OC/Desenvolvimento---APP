function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    let mensagens = '';

    // Validação do nome
    if (nome === '') {
        mensagens += 'O nome deve ser preenchido.<br>';
    }

    // Validação do email
    if (email === '' || !email.includes('@')) {
        mensagens += 'O email deve ser válido e conter "@"<br>';
    }

    // Validação da senha
    if (senha.length < 6) {
        mensagens += 'A senha deve ter pelo menos 6 caracteres.<br>';
    }

    // Exibe mensagens de erro ou sucesso
    const mensagensDiv = document.getElementById('mensagens');
    if (mensagens) {
        mensagensDiv.innerHTML = mensagens; // Mostra erros
    } else {
        mensagensDiv.innerHTML = 'Cadastro realizado com sucesso!'; // Sucesso
        // Aqui você pode prosseguir com o envio do formulário, por exemplo, enviando para um servidor
        console.log('Nome:', nome, 'Email:', email, 'Senha:', senha);
    }

    return false; // Impede o envio do formulário se houver erros
}
