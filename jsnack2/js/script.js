let sum = 0;
let nElement;

for (i = 0; i < 10; i++){
        
    nElement = Number(prompt ('Inserisci un numero'));
    
    sum += nElement;

}

document.querySelector("#text").innerHTML = `La somma dei 10 numeri inseriti è`;
document.querySelector("#result").innerHTML = `${sum}`;

// if (!isNaN(nElement)) {


// } else {

//     document.querySelector("#text").innerHTML = `Uno dei valori inseriti non corrisponde ad un numero`;

// }