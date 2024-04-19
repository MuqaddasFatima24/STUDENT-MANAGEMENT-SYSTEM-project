import inquirer from "inquirer";

class School {
    name: string;
    students: Student[]=[];
    teachers: Teacher[]=[];

    addStudent(stdObj: Student){
        this.students.push(stdObj)
    };
    addTeacher(teObj: Teacher){
        this.teachers.push(teObj)
    }
    constructor(name:string){
        this.name = name;
    };
}

class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string,age:number,schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    };
}
class Teacher extends Student{}

// SCHOOL:
let school1 = new School("Happy Palace");
let school2 = new School("Karachi Academy");
let school3 = new School("Pakland");

// STUDENT:
let s1 = new Student("Taha", 10, school1.name);
let s2 = new Student("Umer", 20, school2.name);
let s3 = new Student("Ayyan", 15, school3.name);

// TEACHER:
let t1 = new Teacher("Uzma", 25, school1.name);
let t2 = new Teacher("Muqaddas Fatima", 30, school2.name);
let t3 = new Teacher("Noor Fatima", 22, school3.name);

// STUDENT:
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);

// TEACHER:
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);

// TEACHER:
console.log(t1);
console.log(t2);
console.log(t3);

// SCHOOL:
console.log(school1);
console.log(school2);
console.log(school3);

// STUDENTS:
console.log(s1);
console.log(s2);
console.log(s3);
