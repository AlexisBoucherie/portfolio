//on cible l'écran d'affichage
let screen = document.getElementById("screen");

//on cible l'écran caché pour mémoriser la première partie du calcul (firstNumber)
let remember = document.getElementById("memory");

//on cible un autre écran pour se souvenir du type d'opération
let operationType = document.getElementById("opType");

//on cible toutes les touches une par une
let numberZero = document.getElementById("zero");
let numberOne = document.getElementById("one");
let numberTwo = document.getElementById("two");
let numberThree = document.getElementById("three");
let numberFour = document.getElementById("four");
let numberFive = document.getElementById("five");
let numberSix = document.getElementById("six");
let numberSeven = document.getElementById("seven");
let numberEight = document.getElementById("eight");
let numberNine = document.getElementById("nine");

let plusSign = document.getElementById("plus");
let minusSign = document.getElementById("minus");
let timesSign = document.getElementById("times");
let dividedbySign = document.getElementById("dividedby");
let equalSign = document.getElementById("equal");
let clearCalc = document.getElementById("clear");

//on crée des événements pour afficher les numéros saisis à l'écran
numberZero.addEventListener("click", () => {reset(); screen.innerHTML += 0;});
numberOne.addEventListener('click', () => {reset(); screen.innerHTML += 1;});
numberTwo.addEventListener('click', () => {reset(); screen.innerHTML += 2;});
numberThree.addEventListener('click', () => {reset(); screen.innerHTML += 3;});
numberFour.addEventListener('click', () => {reset(); screen.innerHTML += 4;});
numberFive.addEventListener('click', () => {reset(); screen.innerHTML += 5;});
numberSix.addEventListener('click', () => {reset(); screen.innerHTML += 6;});
numberSeven.addEventListener('click', () => {reset(); screen.innerHTML += 7;});
numberEight.addEventListener('click', () => {reset(); screen.innerHTML += 8;});
numberNine.addEventListener('click', () => {reset(); screen.innerHTML += 9;});

//on crée des événements pour les touches des signes opératoires
plusSign.addEventListener('click', () => {memorize(); add(); clear();});
minusSign.addEventListener('click', () => {memorize(); substract(); clear();});
dividedbySign.addEventListener('click', () => {memorize(); divide(); clear();});
timesSign.addEventListener('click', () => {memorize(); multiply(); clear();});
equalSign.addEventListener('click', equals);
clearCalc.addEventListener('click', clearAll);

// --- OPERATIONS --- //

//on crée une fonction pour se souvenir de ce que l'on a tapé
function memorize() {
    remember.innerHTML += screen.innerHTML;
}

//on crée une fonction pour les additions
function add() {
    operationType.innerHTML = "addition";
}

//on crée une fonction pour les soustractions
function substract() {
    operationType.innerHTML = "substraction";
}

//on crée une fonction pour les multiplications
function multiply() {
    operationType.innerHTML = "multiplication";
}

//on crée une fonction pour les divisions
function divide() {
    operationType.innerHTML = "division";
}

//on crée une fonction pour remettre l'écran à zéro
function clear() {
    screen.innerHTML = "";
}

//on crée une fonction pour faire un reset de la calculette
function clearAll() {
    screen.innerHTML = "";
    remember.innerHTML = "";
    operationType.innerHTML = "";
}

//on crée une fonction pour remettre la calculatrice à zéro si on a déjà effectué une opé
function reset() {
    if (operationType.innerHTML === "over" || screen.innerHTML === "ERROR") {
        clearAll();
    }
}

// --- RESULTAT --- //

// on crée une fonction pour calculer les opérations suivant leur type (touche égal)
function equals() {
    let firstNumber = remember.innerHTML;
    let secondNumber = screen.innerHTML;
    if(operationType.innerHTML === "addition") {
        screen.innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
    } else if(operationType.innerHTML === "substraction") {
        screen.innerHTML = parseInt(firstNumber) - parseInt(secondNumber);
    } else if(operationType.innerHTML === "multiplication") {
        screen.innerHTML = parseInt(firstNumber) * parseInt(secondNumber);
    } else if(operationType.innerHTML === "division") {
        screen.innerHTML = parseInt(firstNumber) / parseInt(secondNumber);
    } else {
        screen.innerHTML = "ERROR";
    }
    //on change le type sur "over" pour pouvoir exécuter un clearAll()
    operationType.innerHTML = "over";
}