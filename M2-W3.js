/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2){
    let rettangoloArea = (l1 * l2);
    console.log(rettangoloArea)
};
area(6,11);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(par1, par2){
    let var1 = parseInt(par1);
    let var2 = parseInt(par2);

    let somma;

    if(var1 === var2){
        return (var1 + var2) * 3;
    } else {
        return (var1 + var2);
    };
};
console.log(crazySum(3.4,5.3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(par){
    let n = 19;
    let risultato = Math.abs(par - n);
    if(risultato > n){
        return risultato * 3;
    } else{
        return risultato;
    };
};
console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(num){
    let num1 = parseInt(num);

    if((num1 > 20 && num1 <= 100) || num1 === 400){
        return true;
    } else {
        return false;
    };
};
console.log(boundary(88));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
function codify(s){
    if(s.startsWith("code")){
        return s;
    } else {
        return "code".concat(s);
    };
};
console.log(codify("ciao"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(int){
    if(int > 0){
        if(int % 3 === 0 || int % 7 === 0){
            return true;
        } else {
            return false;
        };
    } else {
        // console.log("scrivi un valore positivo!");
        // se lascio il console ritorna undefined mentre con return no
        return "scrivi un valore positivo!"
    };
};

console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
let string1 = "epicode";

function reverseString(st){
    return (risultato = st.split(``).reverse().join(``));
};

console.log(reverseString(string1));



/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringOne){

    const stringa = stringOne.split(" ");
    for(let i = 0; i < stringa.length; i++){
        stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1);
    };

    const stringaDue = stringa.join(" ");
    return stringaDue;

};
console.log(upperFirst("ciao messana"));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
function cutString(stringTwo){
    return stringTwo.slice(1, stringTwo.length - 1);
};
console.log(cutString("Ciao"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom(n){
    let arrays = [];
    for(let i = 0; i < n; i++){
        arrays[i] = parseInt(Math.random() * 10);
    };
    return arrays;
};
console.log(giveMeRandom(7));
