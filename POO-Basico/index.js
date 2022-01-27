const natalia = {
  name: "Natalia",
  age: 20,
  courses: ["Curso de Html y Css", "Curso de Git y Github"],
  aproveCourse(newCourse) {
    this.courses.push(newCourse);
  },
}; /** OBJETO LITERAL */

// Vamos a crear la función para que
// estudiante (natalia)
// pueda aprovar otro curso

natalia.courses.push("Curso de programación básica");
console.log(natalia);

const estudiante = {
  name: "",
  age: 0,
  course: [],
  aproveCourse(courseNew) {
    this.course.push(courseNew);
  },
}; /** OBJETO LITERAL */

function Student(name, age, courses) {
  this.name = name;
  this.age = age;
  this.courses = courses;
}
Student.prototype.aproveCourse = function (newCourse) {
  this.courses.push(newCourse);
};
const arley = new Student("Arley", 25, [
  "Curso de marca personal",
  "Curso de Git y Github",
]);
console.log(arley);
arley.aproveCourse("Prueba de añadir curso");
console.log(arley.courses);

function Cursos(dirCurso, cantEstudiantes, materias) {
  this.dirCurso = dirCurso;
  this.cantEstudiantes = cantEstudiantes;
  this.materias = materias;
}
Cursos.prototype.agregarMaterias = function (nombreMateria) {
  this.materias.push(nombreMateria);
};
const decimo = new Cursos("Pepito Perez", 30, ["Matemáticas"]);
console.log(decimo);
decimo.agregarMaterias("Ingles");
console.log(decimo.materias);

// Prototipos con la sintaxis de Clases

class StudentClass {
  constructor(name, age, courseAprove) {
    this.name = name;
    this.age = age;
    this.courseAprove = courseAprove;
  }
  newCourseAprove(nameCourse) {
    this.courseAprove.push(nameCourse);
  }
}

const lizethClass = new StudentClass("Sheryll", 21, [
  "Servicios farmaceuticos",
]);
console.log(lizethClass);
lizethClass.newCourseAprove("Jefe de enfermería");
console.log(lizethClass);

// Video 7

const juan1 = {
  name: "Anthony",
  username: "Arlo70",
  points: 7650,
  socialMedia: {
    twitter: "UserTwitter",
    facebook: undefined,
    instagram: "UserInstagram",
  },
  aprovedCourses: [
    "Curso de HTML y CSS",
    "Curso de programación básica"
  ],
  learningPaths: [
    {
      name: "Escuela de desarrollo web",
      courses: [
        "Programación básica",
        "Responsive Design",
        "Mobile First"
      ],
    },
    {
      name: "Escuela de videojuegos",
      courses: [
        "Producuccion de videojuegos",
        "Unreal Engine",
        "Unity3d"
      ],
    },
  ],
};

const miguel1 = {
  name: "Miguel",
  username: "miguel@platzi",
  points: 5650,
  socialMedia: {
    twitter: "Miguel Twitter",
    facebook: 'Facebook Miguel',
    instagram: undefined,
  },
  aprovedCourses: [
    "POO Básico",
    "Evolución del Internet"
  ],
  learningPaths: [
    {
      name: "Escuela de ingles",
      courses: [
        "Oraciones en pasado",
        "Oraciones en presente",
        "Oraciones en futuro"
      ],
    },
    {
      name: "Escuela de Machine Learning",
      courses: [
        "Básico de Python",
        "Intermedio de Python",
        "Matemáticas básicas"
      ],
    },
  ],
};

class Student{
  constructor({
    name,
    username,
    email,
    points = undefined,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
  })
  {
    this.name = name;
    this.username = username;
    this.email = email;
    this.points = points;
    this.socialMedia ={
      twitter,
      instagram,
      facebook,
    };
  }
}

class LearningPaths{
  constructor({
    nameLearningPaths,
    coursesLearningPaths = [],
  }){
    this.nameLearningPaths = nameLearningPaths;
    this.coursesLearningPaths = coursesLearningPaths;
  }
}

const escuelaJS = new LearningPaths({
  nameLearningPaths:'Escuela de Javascript',
  coursesLearningPaths:[
    'Prework en Windows',
    'Prework en Mac',
    'Prework en Linux',
  ]
});

const desarrolloWeb = new LearningPaths({
  nameLearningPaths:'Escuela de Desarrollo Web',
  coursesLearningPaths:[
    'Programación básica',
    'Pensamiento lógico',
    'solución de algoritmos',
  ]
});

const juan2 = new Student ({
  name :'Juan Dos',
  username :'juan@dos',
  email: 'juan@juan.com',
  facebook: "Facebook Juan Dos"
});

console.log(juan2);
console.log(escuelaJS);
console.log(desarrolloWeb);