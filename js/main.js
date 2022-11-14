const listaRandomEl = document.querySelector(".list-random-numbers")
const randomNumbersList = []
let listUserNumbers = []
let matchingNumbers = []
let messaggioFinale = document.querySelector(".final-message")

// GENERATORE NUMERI RANDOM E PUSH IN LISTA
for (let i = 0; i < 5; i++) {
    ranNum = getRandomNumber(1, 99)
    ranNumFixed = ranNum.toFixed(0)
    randomNumbersList.push(ranNumFixed)
    listaRandomEl.innerHTML += " " + ranNumFixed + " "
}


// TIMER (Variabili e funzione)
let timeLeft = 30;
const timer = document.querySelector(".timer")
let timerId = setInterval(countdown, 500);

function countdown() {
    if (timeLeft == 0) {
        listaRandomEl.innerHTML = ""
        timer.innerHTML = ""
        timeLeft--;
    }
    else if (timeLeft == -1) {
        clearTimeout(timerId);
        prompts();
    } else {
        timer.innerHTML = timeLeft + ' secondi rimanenti';
        timeLeft--;
    }
}

// PROMPTS NUOVI NUMERI E PUSH NELLA NUOVA LISTA
function prompts() {
    const numUser1 = prompt("Inserisci un numero che ti ricordi")
    const numUser2 = prompt("Inserisci un numero che ti ricordi")
    const numUser3 = prompt("Inserisci un numero che ti ricordi")
    const numUser4 = prompt("Inserisci un numero che ti ricordi")
    const numUser5 = prompt("Inserisci un numero che ti ricordi")
    listUserNumbers.push(numUser1, numUser2, numUser3, numUser4, numUser5)
    console.log(listUserNumbers)

    for (let x = 0; x < 5; x++) {
        if (listUserNumbers.includes(randomNumbersList[x]) ) {
            matchingNumbers.push(randomNumbersList[x])
        }
    }

    messaggio()
}

console.log(randomNumbersList, listUserNumbers)

// DISPLAY MESSAGGIO FINALE
function messaggio() {
    if (matchingNumbers.length = 5 ) {
        alert("Bravo, hai trovato tutti i numeri corrispondenti: " + matchingNumbers )
    } else if (matchingNumbers.length > 0) {
        alert("Bravo, hai trovato " + matchingNumbers.length + " numero/i corrispondente/i: " + matchingNumbers )
    } else {
        alert("Mi dispiace, non hai azzeccato nessun numero")
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }