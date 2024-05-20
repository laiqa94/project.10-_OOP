import inquirer from "inquirer";
// Define a base class 'Person'
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Define a subclass 'student' that inherits from 'Person'
class student extends Person {
    rollNo;
    constructor(name, rollNo) {
        super(name);
        this.rollNo = rollNo;
    }
}
// Define a subclass 'Teacher' that inherits from 'Person'
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}
//constructor
const Persons = new Person('name');
const programStart = async (persons) => {
    do {
        console.log("Wellome!");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            choices: ["Student", "Teacher", "exit"],
            message: "Select your role"
        });
        if (ans.Select == "Student") {
            const ans = await inquirer.prompt({
                name: "Student",
                type: "input",
                message: "Enter your Student's name you wish to engnge with:"
            });
        }
        else if (!student) {
            const name = new student(ans.Student, 0);
            class persons {
                name;
            }
            ;
            console.log(" Hello i am ${name.name} Nice too meet you");
            console.log("Your roll number is ${name.rollNo}");
            console.log("new student added");
            console.log("Current student list:");
            console.log("persons.students");
        }
        else {
            console.log("Hello i am ${Student.name} Nice too meet you!");
            console.log("Existing student list:");
            console.log("persons.students");
        }
        if (ans.Select == "Teacher") {
            const ans = await inquirer.prompt({
                name: "Teacher",
                type: "input",
                message: "Enter your Teacher's  you wish to engnge with:"
            });
            const Teacher = ('eval' == eval.name, ans.Teacher);
        }
        else if (!Teacher) {
            const name = new Teacher(ans.Teacher, "");
            class Person {
                name;
            }
            ;
            console.log(' Hello i am ${name.name} Nice too meet you');
            console.log("new teacher added");
            console.log("Current teacher list:");
            console.log("persons.teachers");
        }
        else {
            console.log("Hello i am ${Teacher.name} Nice too meet you!");
            console.log("Existing teacher list:");
            console.log("persons.teachers");
        }
        if (ans.Select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(Persons);
