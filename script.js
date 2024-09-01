const maxTries = 7;
const message = document.getElementById("message");
const numInput = document.getElementById("numInput");
const attemptsText = document.getElementById("attempts");
const guessButton = document.getElementById("guessButton");
const playAgainButton = document.getElementById("playAgainButton");
const restartButton = document.getElementById("restartButton");
let randomNumber, numTries;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numTries = 0;
    numInput.value = "";
    attemptsText.innerHTML = `Você tem ${maxTries} tentativas`;
    message.innerHTML = "";
    guessButton.style.display = "block";
    playAgainButton.style.display = "none";
    restartButton.style.display = "none";
}

function guessNumber() {
    let numInputValue = parseInt(numInput.value);

    // Verificar se o número está dentro do intervalo permitido
    if (numInputValue < 1 || numInputValue > 100 || isNaN(numInputValue)) {
        message.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    numTries++;

    if (numTries > maxTries) {
        message.innerHTML = "Você atingiu o limite de tentativas! Tente novamente.";
        restartButton.style.display = "block";
        guessButton.style.display = "none";
        playAgainButton.style.display = "none";
        return;
    }

    let remainingAttempts = maxTries - numTries;
    attemptsText.innerHTML = `Você tem ${remainingAttempts} tentativas restantes`;

    if (numInputValue < randomNumber) {
        message.innerHTML = `O número é maior! Tente novamente.`;
    } else if (numInputValue > randomNumber) {
        message.innerHTML = `O número é menor! Tente novamente.`;
    } else {
        message.innerHTML = `Parabéns! Você acertou o número em ${numTries} tentativas!` +
            "<br><br><button onclick='playAgain()' id='playAgainButton'>Jogar Novamente</button>";
        restartButton.style.display = "none";
        guessButton.style.display = "none";
        playAgainButton.style.display = "block";
    }
}

function playAgain() {
    initializeGame();
}

function restartGame() {
    message.innerHTML = '';
    restartButton.style.display = "none";
    initializeGame();
}

document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
});
