let sumElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
let sum = 0;
let x = 0;

for (i = 1; i <= 10; i++) {
    
    sum += i;
    
}

x += (sum / (i - 1));

titleElement.innerHTML = `Somma e media dei numeri da 1 a 10`;
sumElement.innerHTML = `La somma è ${sum}, invece la media è ${x}`;