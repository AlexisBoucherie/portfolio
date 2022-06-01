/* VARIABLES */

// on cible les écrans
const memoryScreen = document.getElementById("memory");
const displayScreen = document.getElementById("screen");
// on cible les boutons
const numberButtons = document.querySelectorAll(".number-btn");
const signButton = document.querySelectorAll(".sign-btn");
const acButton = document.getElementById("all-clear");
const equalButton = document.getElementById("equal");
// on cible le type d'opération
let operation = document.getElementById("operation-type");

/* LISTENERS */

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        let number = button.innerText;
        appendNumber(number);
    })
});

signButton.forEach(button => {
    button.addEventListener("click", () => {
        operation.innerText = button.innerText;
        chooseOperation();
    })
});

equalButton.addEventListener("click", () => {
    calculate();
});

acButton.addEventListener("click", () => {
    clear();
});

/* FUNCTIONS */
function clear() {
    memoryScreen.innerText = "";
    displayScreen.innerText = "";
    operation.innerText = "";
}

function appendNumber(number) {
    // on vérifie s'il n'y a pas déjà un point
    if (number === "." && displayScreen.innerText.includes(".")) return;
    // si on commence par taper un point, on considère que le premier chiffre est un zéro
    if (number === "." && displayScreen.innerText === "") {
        displayScreen.innerText = "0"
    }
    displayScreen.innerText += number;
}

function chooseOperation() {
    // on vérifie que l'écran n'est pas vide, auquel cas la fonction ne s'exécute pas
    if (displayScreen === "") return;
    // s'il y a déjà quelque chose en mémoire, on exécute le calcul
    if (memoryScreen !== "") {
        calculate();
    }
    // on charge l'écran d'affichage dans l'écran de mémorisation 
    memoryScreen.innerText = displayScreen.innerText;
    // on remet à zéro l'écran d'affichage
    displayScreen.innerText = "";
}

function calculate() {
    let operationType = operation.innerText;
    // si aucun opérateur a  été pressé, on bloque la focntion
    if (operation.innerText === "") return;

    const memory = parseFloat(memoryScreen.innerText);
    const display = parseFloat(displayScreen.innerText);
    // s'il manque une des parties de l'opération, on bloque la fonction
    if (isNaN(memory) || isNaN(display)) return;
    switch (operationType) {
        case "+":
            computation = memory + display;
            break;
        case "-":
            computation = memory - display;
            break;
        case "x":
            computation = memory * display;
            break;
        case "/":
            computation = memory / display;
            break;
        default:
            return;
    }
    displayScreen.innerText = computation;
    operation.innerText = "";
    memoryScreen.innerText = "";
}