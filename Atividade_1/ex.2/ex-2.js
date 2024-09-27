// Solicita dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Realiza as operações matemáticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

// Exibe os resultados
alert("Resultados:\n" +
      "Soma: " + soma + "\n" +
      "Subtração: " + subtracao + "\n" +
      "Multiplicação: " + multiplicacao + "\n" +
      "Divisão: " + divisao);
