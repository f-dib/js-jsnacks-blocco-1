let sum = 0;
let nElement;

for (i = 0; i < 10; i++){
    
    nElement = Number(prompt ('Inserisci un numero'));
    
    sum += nElement;

}

document.querySelector("#result").innerHTML = `${sum}`;