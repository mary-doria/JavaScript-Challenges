/*Una variable privada es aquella que tiene restricciones y 
mayor control para ser cambiada, modificada, eliminada o actualizada.
Una de las formas de crear variables privadas en JavaScript, 
es por medio de los closures. Un closure tiene una variable local de scope de función,
por lo que únicamente ese scope tiene acceso a esa variable.
Si intentamos acceder en un scope diferente indicará un error.
Por lo que, mediante la función dentro del closure vinculada a la variable local correspondiente, será la manera de acceder a la variable.
En este ejemplo retornaremos un objeto con dos propiedades que son funciones. */


const person = () =>{
    var saveName= 'Name';
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
             saveName = name;
        }
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log(newPerson.getName())
newPerson.setName('OscarZOE');
console.log(newPerson.getName())