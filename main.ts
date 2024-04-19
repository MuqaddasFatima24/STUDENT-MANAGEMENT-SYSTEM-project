import inquirer from "inquirer";

class Student {
    name: string;
    studentID: string;
    enrolledCourses: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.enrolledCourses = [];
        this.balance = 0;
    }

    private generateStudentID(): string {
        const randomNumber = Math.floor(Math.random() * 90000) + 10000; // Generate a random 5-digit number
        return "S" + randomNumber.toString();
    }

    enroll(course: string) {
        this.enrolledCourses.push(course);
    }

    viewBalance(): void {
        console.log(`${this.name}'s balance: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Payment of $${amount} received. New balance: $${this.balance}`);
    }

    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.studentID}`);
        console.log("Enrolled Courses:");
        this.enrolledCourses.forEach(course => console.log(course));
        console.log(`Balance: $${this.balance}`);
    }
}

// Adding 5 new students
const students: Student[] = [
    new Student("Uzma"),
    new Student("Muqaddas Fatima"),
    new Student("Taha Afridi"),
    new Student("Noor Fatima"),
    new Student("Umer"),
];

// Enrolling students in courses
students[0].enroll("Urdu");
students[1].enroll("Computer");
students[2].enroll("Chemistry");
students[3].enroll("maths");
students[4].enroll("Physics");

// Testing operations
students.forEach(student => {
    console.log("");
    student.showStatus();
    student.viewBalance();
    student.payTuition(500);
    student.showStatus();
});