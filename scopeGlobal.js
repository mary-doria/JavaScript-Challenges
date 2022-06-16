/**Scope Global/ */
var hello = "Hello";
let world ="Hello World";
const helloWorld ="Hello World!"

//Funcion que nos permite a las Variables Locales
/*Scope Global = me permite acceder a la variables en el Scope Global , 
no se puede reasignar con var porque reescribe, con let-const la palabra reservada hay un error*/
// 
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();
//1. ERROR CONSTANTE = una variable sin las palabras reservadas
/*const helloWorld = () => {
    globalVar ='im global'//MALA PRACTICA ASIGNANDO UNA VARIABLE GLOBAL 
}
helloWorld();
console.log(globalVar)*/