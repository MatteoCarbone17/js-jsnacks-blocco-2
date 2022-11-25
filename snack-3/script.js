/* Calcola la somma dei primi 10 numeri di un array.*/
   
/*Calcola la somma e la media dei primi 10 numeri di un array */


let listNumbers = [7 , 10, 2 , 44 , 62 , 10 , 16, 5 , 6 , 6 , 6 , 5 , 67 , 65 , 76 ,323,  6 , 6 , 5 , 67 , 65 , 76 ,323 ];

let total = 0;

for (let i = 0; i <= 10; i++) {

total += listNumbers[i];

};

let media = total / 10;

console.log(total);

console.log(media);
