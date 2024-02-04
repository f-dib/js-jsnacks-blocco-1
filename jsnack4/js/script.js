let inputElement = prompt('inserisci un numero con quattro cifre');
let resultElement = document.querySelector("#result");
let sum = 0;
let x = inputElement.length;
inputElement = Number(inputElement);

for (let i = 0; i < x; i++) {
    
    sum += inputElement % 10;    

}

resultElement.innerHTML = `${sum}`;