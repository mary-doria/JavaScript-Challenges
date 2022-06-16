//PALABRA RESERVADA-> Let
const fruits = () => {
    if(true){
        var fruits = 'apple';
        let fruit2 = 'Banana';
        const fruits3= 'kiwi';
        console.log(fruit2);
        console.log(fruits3);
    }
    console.log(fruits);
   
}
fruits();

/*let  x=1// Valor Global
{
    let x= 2;//Valor Local
    console.log(x)

}
console.log(x)
*/

/*var  x=1;// Valor Global
{
    var x= 2;//Valor Local
    console.log(x)

}
console.log(x)*/


const forFunction = () =>{

    for (let i = 0; i < 10 ; i++){
        setTimeout(()=>{
            console.log(i);

        }, 1000)//numero al que vamos a acceder
    }
};

forFunction();



