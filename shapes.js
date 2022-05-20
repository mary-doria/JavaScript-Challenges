console.group("Cuadrados")
//Perimetro de un Cuadrado
const ladoCuadrado = 5;
console.log("Los lados del Cuadrado miden: " + ladoCuadrado + "cm ");
//Formula de los perimetros 
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del Cuadrado: " + perimetroCuadrado + "cm " );
//Area Cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado ;
console.log("El area del Cuadrado: " + areaCuadrado + "cm ");
console.groupEnd();

console.group("Triangulos")
//Perimetro de un Triangulo
ladoUno= 6;
ladoDos= 6;
ladoTres= 4;

console.log("Los lados del triangulo miden: "
 + "Lado Uno: " 
 + ladoUno 
 + "cm "
 + "Lado Dos: " 
 + ladoDos 
 + "cm "
 + "Lado Tres: " 
 + ladoTres
 + "cm ");
//Formula de los Triangulo
const perimetroTriangulo = ladoUno + ladoDos + ladoTres;
console.log("El perimetro del Triangulo es : " + perimetroTriangulo + " cm" );
console.groupEnd();

