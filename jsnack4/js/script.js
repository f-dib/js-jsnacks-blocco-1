let inputElement = prompt('inserisci un numero con quattro cifre');
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text")
let sum = 0;
let x = inputElement.length;

inputElement = Number(inputElement);

for (let i = 0; i < x; i++) {
    
    sum += inputElement % 10;    
    inputElement = Math.floor (inputElement / 10);

}

titleElement.innerHTML = `La somma delle quattro cifre digitate è`
resultElement.innerHTML = `${sum}`;


// setTimeout( 
//     function() {
//     while (inputElement.length != 4 || isNaN(inputElement)) {
    
//         inputElement = prompt('inserisci un numero con quattro cifre');

//         if(inputElement.length != 4 || isNaN(inputElement)){
//             titleElement.innerHTML = `Non hai inserito un numero a quattro cifre`
//             resultElement.innerHTML = `C'è tempo e luogo per ogni cosa, ma non ora.`;
//         } else {

//         }

    
//     }

// }, 200)