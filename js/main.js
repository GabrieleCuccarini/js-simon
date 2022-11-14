const listaEl = document.querySelector(".list-random-numbers")
const randomNumbersList = []

// GENERATORE NUMERI RANDOM E PUSH IN LISTA
for (let i = 0; i < 5; i++) {
    ranNum = getRandomNumber(1, 100)
    ranNumFixed = ranNum.toFixed(0)
    randomNumbersList.push(ranNumFixed)
    listaEl.innerHTML += " " + ranNumFixed + " "
}

// TIMER (Variabili e funzione)
let timeLeft = 30;
const timer = document.querySelector(".timer")
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        timer.innerHTML = timeLeft + ' secondi rimanenti';
        timeLeft--;
    }
}

function doSomething() {
    alert("Hi");
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }