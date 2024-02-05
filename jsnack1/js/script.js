let firstElement = prompt ('Inserisci una prima parola casuale');
let secondElement = prompt ('Inserisci una seconda parola casuale');
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");

if (isNaN(firstElement) && isNaN(secondElement)) {

    if (firstElement.length > secondElement.length) {
    
        titleElement.innerHTML = `La seconda parola è di sole ${secondElement.length} lettere, invece la prima è di ${firstElement.length} lettere`;
        resultElement.innerHTML = `${secondElement} ${firstElement}`;
        
    } else if (firstElement.length == secondElement.length) {
    
        titleElement.innerHTML = `Le parole hanno lo stesso numero di lettere, cioè ${firstElement.length}`;
        resultElement.innerHTML = `${firstElement} ${secondElement}`;
    
    } else {

        titleElement.innerHTML = `La prima parola è di sole ${firstElement.length} lettere, invece la seconda è di ${secondElement.length} lettere`;
        resultElement.innerHTML = `${firstElement} ${secondElement}`;

    }

} else {
    resultElement.innerHTML = `Uno dei valori inseriti non è valido`;
}