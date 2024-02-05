const endElement = Number(prompt('Inserisci un numero'));
const resultElement = document.querySelector("#result");
const titleElement = document.querySelector("#text");

titleElement.innerHTML = `Il cubo dei numeri da uno a ${endElement} sono`;

for (i = 1; i <= endElement; i++) {

    let powElement = Math.pow(i, 3);

    resultElement.innerHTML += ` ${powElement}`;
}