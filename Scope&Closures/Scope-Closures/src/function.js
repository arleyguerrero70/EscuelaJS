const fruit = () =>{
    const fruit = 'apple';
    console.log(fruit);
}

fruit();

const anotherFunction = () =>{
    var a = 1;
    var a = 2;
    let b = 3;
    console.log(a);
    console.log(b);
}

anotherFunction();

// Las variables con que se inicializan con la palabra VAR
// pueden ser re asignada, lo que en un código a gran escala significaría
// un problema, es por ello que se usa let y const ya que estas no tienen esa caracteristica
