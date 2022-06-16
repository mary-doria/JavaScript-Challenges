//Asignar valores y reconstruir elementos, guard
//Ambito lexico : Alcance donde esta asignado, AMBITO ALCANCE 

const buildCount = (i) =>{
    let count = i ;
    const displayCount = () =>{
    console.log(count++)
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();


const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();