
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
const giveMeRandom = function(numero){
    const emptyArray = [];
    
    for(let i = 0; i <= numero; i++){
        emptyArray.push(Math.floor(Math.random() * 10));
    }
    return emptyArray;
}

const checkArray = function(emptyArray){
    let arry = 0;

    for(let i = 0; i < emptyArray.length; i++){
        if(emptyArray[i] > 5){
            console.log(`${emptyArray[i]} is bigger than 5`);
            arry = arry + emptyArray[i];
        } else {
            console.log(`${emptyArray[i]} is not bigger than 5`);
        }
    }

    console.log(`The sum of the numbers greater than 5 is ${arry}`);
}

const newArray = checkArray(giveMeRandom(5));


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/
const shoppingCart = [
    {
        name: "Iphone 13",
        price: 1000,
        id: 13,
        quantity: 1,
    },
    {
        name: "Iphone 14 Pro",
        price: 1800,
        id: 4,
        quantity: 4,
    },
    {
        name: "Lenovo X7",
        price: 2400,
        id: 82,
        quantity: 19,
    },
    {
        name: "Samsung Galaxy",
        price: 1400,
        id: 98,
        quantity: 8,
    },
]

const totalCart = function(){
    let total = 0;

    for(let i = 0; i < shoppingCart.length; i++){
        total = total + shoppingCart[i].price + shoppingCart[i].quantity;
    }
    return total;
}

const returnTotalCart = totalCart();
console.log(returnTotalCart);



/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

