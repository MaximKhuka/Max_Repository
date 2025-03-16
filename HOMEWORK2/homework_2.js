// task1
let x = 1;
let y = 2;

let res1 = ++x * (++x + ++y) + "";
console.log(res1);
console.log(typeof res1);

let res2 = ((x != y) + `${y}`);
console.log(res2);
console.log(typeof res2);

let res3 = (x <= y);
console.log(res3);
console.log(typeof res3);

let res4 = ((x + y)*"y");
console.log(res4);
console.log(typeof res4);



// task2
let _number = prompt("Please, enter a number");
let res = _number >= 0 && _number % 2 == 0;
console.log("a)", res);
let res2 = _number % 7 == 0;
console.log("b)", res2);



// task3
const arr = [999, "London", true, null];
alert(arr.length);
let quest = prompt("Do you like JavaScript?");
arr[5] = quest;
alert(arr[5]);
arr.shift(999);
alert(arr);



// task4
let cities = ["Rome", "Lviv", "Warsaw"];
alert(cities.join('*'));



// task5
let isAdult = prompt("What is your age?");
let res = (isAdult >= 18) ? "You are an adult" : "You are too young";
alert(res);



// task6 (variant1)
let side1 = +prompt("Please, enter length of the 1st side of triangle \n(in the range from 1 to 100)");
if (side1 <= 0 || side1 > 100) {
    alert("Incorrect data");
} else if (isNaN(side1)) {
    alert("Incorrect data");
};
let side2 = +prompt("Please, enter length of the 2nd side of triangle \n(in the range from 1 to 100)");
if (side2 <= 0 || side2 > 100) {
    alert("Incorrect data");
} else if (isNaN(side2)) {
    alert("Incorrect data");
};
let side3 = +prompt("Please, enter length of the 3rd side of triangle \n(in the range from 1 to 100)");
if (side3 <= 0 || side3 > 100) {
    alert("Incorrect data");
} else if (isNaN(side3)) {
    alert("Incorrect data");
};

let s = (side1 + side2 + side3) / 2;
let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

if (isNaN(area)) {
    console.log("Incorrect data");
} else {

Number.prototype.round = function(p) {
    p = p || 10;
    return parseFloat( this.toFixed(p) );
};

console.log(`The area of triangle is: ${area.round(3)}`);

let isRightTriangle = (a, b, c) => {
   let con1 = (a*a) === (b*b) + (c*c);
   let con2 = (b*b) === (a*a) + (c*c);
   let con3 = (c*c) === (a*a) + (b*b);
   return con1 || con2 || con3;
};
console.log(`Triangle is right: ${isRightTriangle(side1, side2, side3)}`);
}



// task6 (variant2)
let side1Length = +prompt("Please, enter length of the 1st side of triangle \n(in the range from 1 to 100)");
switch (true) {
    case (side1Length <= 0 || side1Length > 100):
        alert("Incorrect data");
        break;
    case (isNaN(side1Length)):
        alert("Incorrect data");
        break;
};
let side2Length = +prompt("Please, enter length of the 2nd side of triangle \n(in the range from 1 to 100)");
switch (true) {
    case (side2Length <= 0 || side2Length > 100):
        alert("Incorrect data");
        break;
    case (isNaN(side2Length)):
        alert("Incorrect data");
        break;
};
let side3Length = +prompt("Please, enter length of the 3rd side of triangle \n(in the range from 1 to 100)");
switch (true) {
    case (side3Length <= 0 || side3Length > 100):
        alert("Incorrect data");
        break;
    case (isNaN(side3Length)):
        alert("Incorrect data");
        break;
};

function triangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
};
let area = triangleArea(side1Length, side2Length, side3Length);

if (isNaN(area)) {
    console.log("Incorrect data");
} else {

Number.prototype.round = function(p) {
    p = p || 10;
    return parseFloat( this.toFixed(p) );
};

console.log(`The area of triangle is: ${area.round(3)}`);

let isRightTriangle = (a, b, c) => {
   let con1 = (a*a) === (b*b) + (c*c);
   let con2 = (b*b) === (a*a) + (c*c);
   let con3 = (c*c) === (a*a) + (b*b);
   return con1 || con2 || con3;
};
console.log(`Triangle is right: ${isRightTriangle(side1Length, side2Length, side3Length)}`);
}


// task7 (variant1)
let today = new Date();
let hour = today.getHours();

if (hour >= 23 && hour < 5) {
    alert("Good night");
} else if (hour >= 5 && hour < 11) {
        alert("Good morning");
} else if (hour >= 11 && hour < 17) {
        alert("Good afternoon");
} else if (hour >= 17 && hour < 23) {
        alert("Good evening");
};



// task7 (variant2)
let today = new Date();
let hour = today.getHours();

let answer1 = (hour >= 23 && hour < 5) ? "Good night" : "";
let answer2 = (hour >= 5 && hour < 11) ? "Good morning" : "";
let answer3 = (hour >= 11 && hour < 17) ? "Good afternoon" : "";
let answer4 = (hour >= 17 && hour < 23) ? "Good evening" : "";

let answer = (answer1 || answer2 || answer3 || answer4);

alert(answer);
