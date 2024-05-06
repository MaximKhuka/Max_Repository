// *** task1 ***

function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String does not start with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');





// *** task2 ***

function checkEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
console.log(checkEmail("Qmail2@gmail.com"));





// *** task3 ***

const regex = /d(b+)(d)/i;
const text = "cdbBdbsbz";
const matches = text.match(regex);
console.log(matches);


const regexp = /d(b+)(d)/i;
const array = regexp.exec("cdbBdbsbz");
console.log(array);





// *** task4 ***

const text2 = "Java Script";
const regexp2 = /(\w+)\s(\w+)/;
const replacement = "$2, $1";
const swappedText = text2.replace(regexp2, replacement);
console.log(swappedText);





// *** task5 ***

function validateBankCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return cardNumberRegex.test(cardNumber);
}
console.log(validateBankCardNumber("9999-9999-9999-9999"));
console.log(validateBankCardNumber("9999-9999-9999-999"));
console.log(validateBankCardNumber("9999-9999-9999-999a"));





// *** task6 ***

function checkEmail2(email) {
    const emailRegex = /^[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}
checkEmail2('my_mail@gmail.com');
checkEmail2('#my_mail@gmail.com');
checkEmail2('my_ma--il@gmail.com');





// *** task7 ***

function checkLogin(login) {
    const loginRegex = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    const numbers = login.match(/\d+(\.\d+)?/g);
    const isValid = loginRegex.test(login);
    if (isValid) {
        console.log("true");
        if (numbers) {
            console.log(numbers.join(', '));
        }
    } else {
        console.log("false");
        if (numbers) {
            console.log(numbers.join(', '));
        }
    }
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');