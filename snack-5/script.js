
/*
* Generatore di persone fittizie casuali:
* Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
*
*/

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastNames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];



let falseName = [];


while (falseName.length < 7) {

    const randomNamesIndex = Math.floor ( math.random() * (names.length));
    const randomLastNamesIndex = Math.floor ( math.random() * (lastNames.length));

   let guest = names [randomNamesIndex] + ' ' + lastNames[randomLastNamesIndex];

    falseName.push(guest)
    console.log(falseName);

};