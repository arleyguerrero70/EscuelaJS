// Alcance global
// con let y const no se pueden re asginar valores
// solo var tiene esa caractersitica
// por buenas prácticas debo usar const let y var
// en ese mismo orden
var hello = "Hello";
let world = "World";
const helloWorld = "Hello World";

const functonHelloWorld = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

functonHelloWorld();