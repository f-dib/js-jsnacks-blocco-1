let sum = 0;
let nElement;

for (i = 0; i < 10; i++){
        
    nElement = Number(prompt (`Inserisci ${i + 1}° numero`));
    
    if (!isNaN(nElement)) {

        sum += nElement;
    
    } else {
    
        document.querySelector("#text").innerHTML = `Uno dei valori inseriti non corrisponde ad un numero`;
    
    }

}

document.querySelector("#text").innerHTML = `La somma dei 10 numeri inseriti è`;
document.querySelector("#result").innerHTML = `${sum}`;

