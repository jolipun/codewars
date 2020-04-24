//3. Filtering Array

function isOdd(n) {
    return n % 2;
}

let numbers = [1, 2, 3, 4, 5];
let odd = [];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (isOdd(number)) {
        odd.push(number);
    }
}

//The same result using filter() method

let numbers = [1, 2, 3, 4, 5];
let oddNumberArray = numbers.filter(number => number % 2);

console.log(oddNumberArray);