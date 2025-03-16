// task2
console.log("Khuka");


// task3
let name = "Maksym";
let age = 36;
alert(`${name} ${age}`);
name = age;
alert(`${name} ${age}`);


// task3 (console variant)
let name = "Maksym";
let age = 36;
console.log (name);
console.log (age);
name = age;
console.log (`${name} ${age}`);


// task4
const mercedes = {
  class: "E_Class",
  year: 2024,
  vinIsValid: true,
  expirationDate: undefined,
  mileage: null
};


// task5
let isAdult = confirm("Are you over 18 years old?");
console.log(isAdult);


// task6
let myName = "Max";
let myAge = 36;
let myGroup = "TA_with_JS";
let birthYear = 1987;
let isSingle = true;
console.log(myAge);
console.log(typeof(myAge));
console.log(birthYear);
console.log(typeof(birthYear));
console.log(isSingle);
console.log(typeof(isSingle));
console.log(myName);
console.log(typeof(myName));
console.log(myGroup);
console.log(typeof(myGroup));
run = null;
let faith;
console.log(typeof(run));
console.log(typeof(faith));


// task7
let _email = prompt("What is your email?", "max.khuka@gmail.com");
let _password = prompt("What is your password?");
alert(`Dear User, your email is ${_email}, your password is ${_password}`);


// task8
let secInMin = 60;
let minInHour = 60;
let secInHour;
secInHour = secInMin * minInHour;
alert(`There are ${secInHour} seconds in 1 hour`);

let hoursInDay = 24;
let secInDay;
secInDay = secInHour * hoursInDay;
alert(`There are ${secInDay} seconds in 1 day`);

let daysInMonth = 31;
let secInMonth;
secInMonth = daysInMonth * secInDay;
alert(`There are ${secInMonth} seconds in 1 month`);
