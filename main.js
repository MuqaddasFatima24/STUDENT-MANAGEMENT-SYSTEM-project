class Student {
    name;
    studentID;
    enrolledCourses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.enrolledCourses = [];
        this.balance = 0;
    }
    generateStudentID() {
        const randomNumber = Math.floor(Math.random() * 90000) + 10000; // Generate a random 5-digit number
        return "S" + randomNumber.toString();
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
    viewBalance() {
        console.log(`${this.name}'s balance: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received. New balance: $${this.balance}`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.studentID}`);
        console.log("Enrolled Courses:");
        this.enrolledCourses.forEach(course => console.log(course));
        console.log(`Balance: $${this.balance}`);
    }
}
// Adding 5 new students
const students = [
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
export {};
