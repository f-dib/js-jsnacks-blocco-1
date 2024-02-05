let oddElement = [];
let nElement;

for (i = 0; i < 6; i++) {

    nElement = Number(prompt('Inserisci un numero'));

    if (nElement % 2 !== 0){
        oddElement.push(nElement)
    }

}

document.querySelector("#text").innerHTML = `I numeri dispari del tuo array sono`;
document.querySelector("#result").innerHTML = `${oddElement}`;