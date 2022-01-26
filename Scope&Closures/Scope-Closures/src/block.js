let x = 1; /** VARIABLE EN SCOPE GLOBAL */
{
    let x = 2;
    console.log(x);/** VARIABLE EN SCOPE LOCAL */
}
console.log(x);

const fruitsBlock = () =>{
    if (true){
        var fruitOne = 'apple';/** VARIABLES EN BLOCK SCOPE */
        let fruitTwo = 'Pear';/** VARIABLES EN BLOCK SCOPE */
        const fruitthree = 'Kiwi';/** VARIABLES EN BLOCK SCOPE */
        console.log(fruitTwo);
        console.log(fruitthree);
    }
    console.log(fruitOne);
}
fruitsBlock();

const anotherFunction2 = () =>{
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
anotherFunction2();

const anotherFunction3 = () => {
    for(let i = 0; i <10; i++){
        setTimeout(() =>{
            console.log(i);
        },1000);
    }
}
anotherFunction3();

// A esto se le conocoe como BLOCK SCOPE
// y es que al inciar operadores como if,else, for...
// estos tambien tienen un bloque interno
// y aunque las varaibles hacen parte de la misma funcion
// no pueden hacer accedidas (solo var pero sabemos que es mala práctica)
// porque solo viven en los bloques de los operadores