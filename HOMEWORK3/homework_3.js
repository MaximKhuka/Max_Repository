// task1 (using while)
let myArray = [2, 3, 4, 5];
let product = 1;
let n = 4;
let i = 0;
while (i < n) {
    product *= myArray[i];
    console.log("Iteration: " + i + "\nProduct: " + product + "\n");
    i++;
}



// task1 (using for)
let myArray = [2, 3, 4, 5];
let product = 1;
for (let i = 0; i < myArray.length; i++) {
  product *= myArray[i];
  console.log("Iteration: " + i + "\nProduct: " + product + "\n");
}



// task1 (using reduce)
let arrProduct = arr.reduce(function(product, element) {
    return product * element;
}, 1);
console.log(arrProduct);



// task2
let n = 15;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) 
        console.log(`${i} is even`);
    if (i % 2 != 0) 
        console.log(`${i} is odd`);
}



// task3
function randArray(k) {
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(Math.floor(Math.random() * 500) + 1);
    }
    return res;
}
console.log(randArray(5));



// task4
function raiseToDegree(a,b) {
    return a ** b;
}

const a = +prompt("Please, enter a number");
const b = +prompt("Enter the power of the number");

if (Number.isInteger(a) && Number.isInteger(b)) {
    alert(`${a} in the power of ${b} = ${raiseToDegree(a,b)}`);
} else {
    alert("The values entered are not integers");
}



// task5
function findMin(...args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}
alert(findMin(12, 14, 4, -4, 0.2));



// task6
function findUnique(arr) {
   return new Set(arr).size === arr.length;
}
  console.log(findUnique([1, 2, 3, 5, 3]));
  console.log(findUnique([1, 2, 3, 5, 11]));



// task7
function lastElem(arr, count = 1) {
    if (count <= arr.length) {
        return arr.slice(-count);
    } else {
        return arr;
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));



// task8
function capitalLetter (string) {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}  
alert(capitalLetter('i love java script'));
