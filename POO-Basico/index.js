const natalia = {
    name: 'Natalia',
    age: 20,
    courses : [
        "Curso de Html y Css",
        "Curso de Git y Github",
    ],
    aproveCourse(newCourse) {
        this.courses.push(newCourse);
    }
};/** OBJETO LITERAL */

// Vamos a crear la función para que
// estudiante (natalia)
// pueda aprovar otro curso

natalia.courses.push("Curso de programación básica");
console.log(natalia);

const estudiante = {
    name:'',
    age: 0,
    course:[],
    aproveCourse(courseNew){
        this.course.push(courseNew);
    },
}/** OBJETO LITERAL */

function Student(name,age, courses){
    this.name = name;
    this.age = age;
    this.courses = courses;
}
Student.prototype.aproveCourse = function (newCourse){
    this.courses.push(newCourse);
}
const arley = new Student(
    'Arley',
    25,
    [
        'Curso de marca personal',
        'Curso de Git y Github',
    ],
);
console.log(arley);
arley.aproveCourse('Prueba de añadir curso');
console.log(arley.courses);

function Cursos (dirCurso, cantEstudiantes, materias) {
    this.dirCurso = dirCurso;
    this.cantEstudiantes = cantEstudiantes;
    this.materias = materias;
};
Cursos.prototype.agregarMaterias = function (nombreMateria){
    this.materias.push(nombreMateria);
}
const decimo = new Cursos(
    'Pepito Perez',
    30,
    ['Matemáticas'],
);
console.log(decimo);
decimo.agregarMaterias('Ingles');
console.log(decimo.materias);