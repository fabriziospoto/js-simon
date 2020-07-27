// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

var arrayCasuali = [];  //Imposto array PC vuoto;

for (var i = 0; i < 5; i++) {  // Imposto ciclo for per creare cinque numeri e li pusho nell'aaray
    var numeroPc = parseInt(Math.floor(Math.random() * 100));
    arrayCasuali.push(numeroPc);
}
var alertNumeri = alert(arrayCasuali);  //Mostro numeri all'utente
console.log(arrayCasuali);

var arrayUtente = [];

setTimeout(inserisci, 3000);  //Inserisco intervallo dopo il quale far apparire comunicazione;


// FUNZIONI
function inserisci() {
    for (var i = 0; i < 5; i++) {
        var numero = parseInt(prompt('Inserisci un numero fra 0 e 99'));
        if (arrayCasuali.includes(numero)) {
            arrayUtente.push(numero);
            alert('Hai indovinato ' + arrayUtente.length + ' numeri:' + ' ' + arrayUtente);
        } else {
            alert('Non hai indovinato nessun numero');
        }
    }
    console.log(arrayUtente);
}
