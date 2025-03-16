// task1
function calcRectangleArea() {
    let width = +prompt("Enter width");
    let height = +prompt("Enter height");

    if (isNaN(width) || isNaN(height)) {
        throw new Error("Width and height must be numbers");
    }

    return "Rectangle area = " + width * height;
}

try {
    let result = calcRectangleArea();
    console.log(result);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}



// task2
function checkAge() {
    let age = +prompt("Enter your age");

    if (age == null || age == "") {
        throw new Error("The field is empty! Please enter your age");
    }
    else if (isNaN(age)) {
        throw new Error("Age must be a number");
    }
    else if (age < 18) {
        throw new Error("The movie is 18+, access denied");
    }

    return "Access granted, enjoy the movie!";
}

try {
    let result = checkAge();
    alert(result);
}
catch (error) {
    alert(error.name + ": " + error.message);
}



// task3
class MonthException {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}
function showMonthName(month) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }
    return months[month - 1];
}

try {
    showMonthName();
    console.log(showMonthName(12));
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}



// task4
function showUser(id) {
    let userId = {id: id}
    if (id < 0) {
        throw new Error (`ID must not be negative: ${id}`); 
    }
    return userId;
}
function showUsers(ids) {
    let usersArray = [];
    for (element of ids) {
        try {
            usersArray.push(showUser(element))
        }
        catch (error) {
            console.log(error.name, error.message)
        }
    }
     return usersArray;
}
console.log(showUsers([7, -12, 44, 22]));
