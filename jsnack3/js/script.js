let oddElement = [];
let nElement;

for (i = 0; i < 6; i++) {

    nElement = Number(prompt(`Inserisci ${i + 1}° numero`));

    if (!isNaN(nElement)) {

        if (nElement % 2 !== 0){
            oddElement.push(nElement)
        }
    
    } else {
    
        document.querySelector("#text").innerHTML = `Uno dei valori inseriti non corrisponde ad un numero`;
    
    }

}

document.querySelector("#text").innerHTML = `I numeri dispari del tuo array sono`;
document.querySelector("#result").innerHTML = `${oddElement}`;


