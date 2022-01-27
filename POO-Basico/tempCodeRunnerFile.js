class StudentClass{
    constructor(name,age,courseAprove){
        this.name = name;
        this.age = age;
        this.courseAprove = courseAprove;
    }
    newCourseAprove(nameCourse){
        this.courseAprove.push(nameCourse);
    }
};

const lizethClass = new StudentClass(
    'Sheryll',
    21,
    ['Servicios farmaceuticos']
);
console.log(lizethClass);
lizethClass.newCourseAprove('Jefe de enfermería');
console.log(lizethClass);