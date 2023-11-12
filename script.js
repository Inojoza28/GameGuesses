let randomNumber = Math.floor(Math.random() * 100) + 1;
let numTries = 0;
let maxTries = 7;
let message = document.getElementById("message");

function guessNumber() {
    numTries++;

    if (numTries > maxTries) {
        message.innerHTML = "Você atingiu o limite de tentativas! Tente novamente.";
        document.getElementById("restartButton").style.display = "block";
        return;
    }

    let numInput = document.getElementById("numInput").value;

    if (numInput < randomNumber) {
        message.innerHTML = "O número é maior! Tente novamente.";
    } else if (numInput > randomNumber) {
        message.innerHTML = "O número é menor! Tente novamente.";
    } else {
        message.innerHTML = "Parabéns! Você acertou o número!" + "<br><br><button onclick='playAgain()'>Jogar Novamente</button>";
    }
}

function playAgain() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numTries = 0;
    message.innerHTML = "";
    document.getElementById("restartButton").style.display = "none";
}

function changeBackgroundColor() {
    let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = newColor;
}

function restartGame() {
    message.innerHTML = '';
    changeBackgroundColor();
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numTries = 0;
    document.getElementById("restartButton").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    changeBackgroundColor();
});


// Feito por Carlos G. J. I. Santos