// Número máximo de tentativas
const maxTries = 7;
// Seleciona os elementos do DOM
const message = document.getElementById("message");
const numInput = document.getElementById("numInput");
const attemptsText = document.getElementById("attempts");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");

let randomNumber, numTries;

// Inicializa o jogo
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    numTries = 0; // Reseta o contador de tentativas
    numInput.value = ""; // Limpa o campo de entrada
    attemptsText.innerHTML = `Você tem ${maxTries} tentativas`; // Exibe o número máximo de tentativas
    message.innerHTML = ""; // Limpa a mensagem
    guessButton.style.display = "block"; // Exibe o botão de adivinhar
    restartButton.style.display = "none"; // Oculta o botão de reiniciar
}

// Verifica se o número adivinhado está correto
function guessNumber() {
    let numInputValue = parseInt(numInput.value);

    // Verifica se o número está dentro do intervalo permitido
    if (numInputValue < 1 || numInputValue > 100 || isNaN(numInputValue)) {
        message.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    numTries++; // Incrementa o número de tentativas

    if (numTries > maxTries) {
        message.innerHTML = "Você atingiu o limite de tentativas! Tente novamente.";
        restartButton.style.display = "block"; // Exibe o botão de reiniciar
        guessButton.style.display = "none"; // Oculta o botão de adivinhar
        return;
    }

    let remainingAttempts = maxTries - numTries;
    attemptsText.innerHTML = `Você tem ${remainingAttempts} tentativas restantes`; // Atualiza o número de tentativas restantes

    // Compara o valor adivinhado com o número aleatório
    if (numInputValue < randomNumber) {
        message.innerHTML = `O número é maior! Tente novamente.`;
    } else if (numInputValue > randomNumber) {
        message.innerHTML = `O número é menor! Tente novamente.`;
    } else {
        message.innerHTML = `Parabéns! Você acertou o número em ${numTries} tentativas!` +
            "<br><br><button onclick='playAgain()' id='playAgainButton'>Jogar Novamente</button>";
        restartButton.style.display = "none"; // Oculta o botão de reiniciar
        guessButton.style.display = "none"; // Oculta o botão de adivinhar
    }
}

// Reinicia o jogo
function restartGame() {
    message.innerHTML = ''; // Limpa a mensagem
    restartButton.style.display = "none"; // Oculta o botão de reiniciar
    initializeGame(); // Reinicia o jogo
}

// Evento ao carregar o conteúdo da página
document.addEventListener('DOMContentLoaded', function () {
    initializeGame(); // Inicializa o jogo

    // Adiciona evento para o botão "Enter"
    numInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            guessNumber(); // Chama a função de adivinhar o número ao pressionar "Enter"
        }
    });
});