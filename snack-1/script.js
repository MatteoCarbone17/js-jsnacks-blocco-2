/*Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
*/


let listNumber = [];


for (let i = 0; i <= 6; i++) {

    let userNumber = parseInt(prompt('scegli un numero'));

    let dispari = userNumber % 2 ; 

    if ( dispari == 0 ){
        listNumber.push (dispari);
        console.log(dispari);
    }



  }


