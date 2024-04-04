// task1
let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1964
}
function propsCount(currentObject) {
    let count = 0;
    for (const key in currentObject) {
        count++;
    }
    return count; 
}
console.log(propsCount(car));



// task2
// let myCar = {
//     brand: "Audi",
//     model: "RS7",
//     year: 2024,
//     country: "Germany",
//     mileage: 0
// }
// function showProps(obj) {
//     let arr1 = [];
//         arr1.push(Object.keys(obj));
//     let arr2 = [];
//         arr2.push(Object.values(obj));
//     let arr3 = arr1.concat(arr2);
//     return arr3;
// }
// console.log(showProps(myCar));



// task3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//         showFullName() {
//             return `${this.name} ${this.surname}`;
//         }
//     }
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middleName) {
//         return `${this.surname} ${this.name} ${middleName}`;
//     }
//     showCourse() {
//         let today = new Date();
//         let currentYear = today.getFullYear();
//         return `${currentYear - this.year}`;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2018);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());



// task4
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this._experience = 1.2;
//     }

//     showSalary() {
//         return this.dayRate * this.workingDays;
        
//     }

//     showSalaryWithExperience() {
//         return this.showSalary() * this._experience;
//     }

//     get experience() {
//         return this._experience;
//     }

//     set experience(value) {
//         this._experience = value;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(worker1.fullName);
// console.log(worker1.fullName + " salary: " + worker1.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
// worker1.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());

// console.log("\n" + worker2.fullName);
// console.log(worker2.fullName + " salary: " + worker2.showSalary());
// console.log("New experience: " + worker2.experience);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
// worker2.experience = 1.5;
// console.log("New experience: " + worker2.experience);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());

// console.log("\n" + worker3.fullName);
// console.log(worker3.fullName + " salary: " + worker3.showSalary());
// console.log("New experience: " + worker3.experience);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
// worker3.experience = 1.5;
// console.log("New experience: " + worker3.experience);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());

// let workers = [worker1, worker2, worker3];

// console.log("\nSorted salary:");
// workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
// workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// });



// task5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }
//     getArea() {
//         return 0.5 * this.base * this.height;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     getArea() {
//         return this.side ** 2;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// function handleFigures(figures) {
//     let totalArea = 0;
//     figures.forEach(figure => {
//         let area = figure.getArea();
//         console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
//         totalArea += area;
//     });
//     console.log(`Total area: ${totalArea}`);
// }

// function newTriangle() {
//     let base = 4;
//     let height = 5;
//     return new Triangle(base, height);
// }

// function newSquare() {
//     let side = 7;
//     return new Square(side);
// }

// function newCircle() {
//     let radius = 5;
//     return new Circle(radius);
// }

// let figures = [newTriangle(), newSquare(), newCircle()];
// handleFigures(figures);