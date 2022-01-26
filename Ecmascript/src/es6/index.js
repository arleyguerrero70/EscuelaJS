// Parametros por defecto versión anterior
function newFunction (name, age, country){
    name = name || "Arlo";
    age = age || 25;
    country = country || "CO";
    console.log(name, age, country);
}

// ES6 - Parametros por defecto
function newFunction2 (name= "Arlo", age = 25, country = "CO"){
    console.log(name,age,country);
}
newFunction2();
newFunction2("Pepito",30,"MX");

// Concatenación version anterior
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ES6 Concatenación
// Debemos llamar las comillas francesas para esta concatenación
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


// Multilinea de la forma anterior
let lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
+ "Otra frase épica."

// ES6 Multilinea
let lorem2 = `Otra frase que necesitamos 
ahora es otra frase en otra linea`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos version anterior
let person = {
    'name': 'Juanfe',
    'age': 8,
    'country': 'US'
}
console.log(person.name, person.age);

// ES6 Deconstrucción
// De un objeto selecciono que parte necesito, llamo la variable
// donde fue creada, selecciono la parte del objeto que necesito
// y lo convierto en una variable que puede ser accedida facilmente
let {age, country} =person;
console.log(age, country);

// Operador de propagación (Spread operator) en la version anterior
let team1 = ['Cris','Arley','Fran'];
let team2 = ['Migue','John','Sebas'];

let developersBS = ['Developers 1','Cris','Arley','Fran','Migue','John','Sebas'];
console.log(developersBS);

// ES6 Operador de propagación
// en esta version podemos agregar a una nueva variable o array
// sin copiar y pegar lo que haya dentro de cada array
// solo llamando a cada uno 

let developersBS2 = ['Developers 2',...team1, ...team2];
console.log(developersBS2);
