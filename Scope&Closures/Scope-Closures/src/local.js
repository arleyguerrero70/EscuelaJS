const holiMundo = () => {
    const hello = 'Hello world ';
    console.log(hello);
}
holiMundo();
console.log(hello); /** No me va permitir imprimir, porque esta variable no es global y el console.log no esta dentro del scope de la variable */