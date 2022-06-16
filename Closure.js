/*const moneyBox = (coins) =>{
    var saveCoins = 0;
    //Añadimos las monedas
    saveCoins+= coins;
    console.log(`MoneyBox $${saveCoins}`);
}*/
/*Una clausura o closure es una función que guarda referencias
del estado adyacente (ámbito léxico). En otras palabras, una clausura permite 
acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una/ */
//COSLURE :Funcion dentro de la funcion que tiene un scope
const moneyBox = (coins) =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins) =>{ coins= 4;
        debugger
        saveCoins+= coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins
}
//My Closure; Recuerda la asignacion del valor anterior , Guarda los valores en memoria|
let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(15);

