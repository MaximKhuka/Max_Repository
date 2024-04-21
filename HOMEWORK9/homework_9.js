// *** task1 ***

function getPromise(message, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(message);
        }, delay);
    });
};

getPromise("test promise", 2000).then(function(data) {
        console.log(data);
    });





// *** task2 ***

function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
        let product = arr.reduce(function(product, element) {
            return product * element;
            }, 1);

            if (Number(product)) {
                resolve(product);
            } else {
                let error = new Error ("Error! Incorrect array!");
                reject(error);
            }
    })
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"





// *** task3 ***

let delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
let delayArray = [];

function showNumbers() {
    for (let i = 0; i < 10; i++) {
        delayArray.push(delay(i, (Math.floor(Math.random() * (5000 - 2000)))));
    }

    let promiseChain = delayArray.reduce((chain, element) => {
        return chain.then(() => {
            return element.then(result => {
                console.log(result);
            })
        })
    }, Promise.resolve());

    return promiseChain;
}

showNumbers();





// *** task4 ***

let delay777 = (i, time) => new Promise (resolve => setTimeout(() => resolve(i), time));
let delayArray777 = [];
async function showNumbers() {
    for (let i = 0; i < 10; i++) {
        delayArray777.push(delay777(i, (Math.floor(Math.random() * (5000 - 2000)))));
    }
        for (element of delayArray777) {
            let result = await element;
            console.log(result);
        }
}
showNumbers();




































