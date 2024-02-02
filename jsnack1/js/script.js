let firstElement = prompt ('Inserisci una prima parola casuale');
let secondElement = prompt ('Inserisci una seconda parola casuale');
let resultElement = document.querySelector("#result");

if (firstElement.length >= secondElement.length) {
    
    resultElement.innerHTML = `${firstElement} ${secondElement}`;
    
} else {

    resultElement.innerHTML = `${secondElement} ${firstElement}`;

}
