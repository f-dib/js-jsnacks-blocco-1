const endElement = Number(prompt('Inserisci un numero'));
const resultElement = document.querySelector("#result");

for (i = 1; i <= endElement; i++) {

    let powElement = Math.pow(i, 3);

    resultElement.innerHTML += `, ${powElement}`;
}