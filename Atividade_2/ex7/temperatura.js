function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheitParaCelsius(fahrenheit) + 273.15);
}

function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinParaFahrenheit(kelvin) {
    return (kelvinParaCelsius(kelvin) * 9/5) + 32;
}

function converterTemperatura() {
    const valor = parseFloat(document.getElementById("valor").value);
    const unidadeOrigem = document.getElementById("unidadeOrigem").value;
    const unidadeDestino = document.getElementById("unidadeDestino").value;

    let resultado;

    // Verifica se o valor inserido é um número
    if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor numérico válido.";
        return;
    }

    switch (unidadeOrigem) {
        case "Celsius":
            if (unidadeDestino === "Fahrenheit") {
                resultado = celsiusParaFahrenheit(valor);
            } else if (unidadeDestino === "Kelvin") {
                resultado = celsiusParaKelvin(valor);
            } else {
                resultado = valor; // Celsius para Celsius
            }
            break;
        
        case "Fahrenheit":
            if (unidadeDestino === "Celsius") {
                resultado = fahrenheitParaCelsius(valor);
            } else if (unidadeDestino === "Kelvin") {
                resultado = fahrenheitParaKelvin(valor);
            } else {
                resultado = valor; // Fahrenheit para Fahrenheit
            }
            break;
        
        case "Kelvin":
            if (unidadeDestino === "Celsius") {
                resultado = kelvinParaCelsius(valor);
            } else if (unidadeDestino === "Fahrenheit") {
                resultado = kelvinParaFahrenheit(valor);
            } else {
                resultado = valor; // Kelvin para Kelvin
            }
            break;
        
        default:
            resultado = "Unidade de origem inválida.";
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado.toFixed(2)} ${unidadeDestino}`;
}
