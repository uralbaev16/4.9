{
    class Student {
        constructor(fname, lname, tel, adress){
            this.fullName = fname;
            this.lastName = lname;
            this.phoneNumber = tel;
            this.address = adress;
        }
        getFullName(){
            return `Student's Full name ${this.fullName} ${this.lastName}`;
        }
        info(){
            return `Student info: ${this.fullName} ${this.lastName}, Phone number: ${this.phoneNumber}, Address: ${this.address}`;
        }   
    }
    let student = new Student("Mike", "Hill", +19173040556, "300 McDonald Ave, Brooklyn, NY 11218");
    console.log(student.getFullName());
    console.log(student.info());   
}

{
    class Teacher {
        constructor(fname, lname, adress, salary, level){
            this.fullName = fname;
            this.lastName = lname;
            this.address = adress;
            this.salary = salary;
            this.level = level;
        }
        getFullName(){
            return `Teacher's Full name ${this.fullName} ${this.lastName}`;
        }
        description(){
            return `Teacher's description: ${this.fullName} ${this.lastName}, Address: ${this.address}, Salary: ${this.salary}, Level: ${this.level}`;
        }
    }
    let teacher = new Teacher("John", "Doe", "123 Main St, San Francisco, CA 94105", 5000, "Bachelor's");
    console.log(teacher.getFullName());
    console.log(teacher.description());
}
{
    class Group {
        constructor(name, room, level, studentCounts, teacher){
            this.name = name;
            this.room = room;
            this.level = level;
            this.studentCounts = studentCounts;
            this.teacher = teacher;
        }
        fullInformation(){
            return `Group's full information: ${this.name}, Room: ${this.room}, Level: ${this.level}, Student counts: ${this.studentCounts}, Teacher: ${this.teacher}`;
        }
    }
    let group = new Group("Math 101", "101", "Freshman", 20, "John Doe");
    console.log(group.fullInformation());
}
{
    class Payment {
        constructor(from, to, amount, date, status){
            this.from = from;
            this.to = to;
            this.amount = amount;
            this.date = date;
            this.status = status;
        }
        getStatus(){
            return `Who was sent by:${this.from} Who got it:${this.to} Amount:${this.amount} Time:${this.date} Status:${this.status}`;
        }
    }
    let hozirgi = new Date
    let time = hozirgi.getTime();

    let otdi = "Completed"
    let otmadi = "Not Completed"

    let payment = new Payment("Mike", "John Doe", 100, time, otdi);
    console.log(payment.getStatus());
}
{
    class Salary {
        constructor(to, amount, type, date, status){
            this.to = to;
            this.amount = amount;
            this.type = type;
            this.date = date;
            this.status = status;
        }
        getInfo(){
            return `Who got the salary:${this.to} Amount:${this.amount} Type:${this.type} Time:${this.date} Status:${this.status}`;
        }
    }
    let hozirgi = new Date
    let time = hozirgi.getTime();

    let otdi = "Completed"
    let otmadi = "Not Completed"

    let salary = new Salary("John Doe", 5000, "USD", time, otdi);
    console.log(salary.getInfo());
}
{
    class Organization {
        constructor(name, founder, adress, employeeCount){
            this.name = name;
            this.founder = founder;
            this.adress = adress;
            this.employeeCount = employeeCount;
    }
    getInfo(){
        return `Organization's full information: ${this.name}, Founder: ${this.founder}, Address: ${this.adress}, Employee count: ${this.employeeCount}`;
    }
    }
    let organization = new Organization("TechAcademy", "John Doe", "123 Main St, San Francisco, CA 94105", 500);
    console.log(organization.getInfo());
}