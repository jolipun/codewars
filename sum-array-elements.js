//4. Creating an Output With Array Elements

let numbers = [1,2,3,4,5]
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
   sum += numbers[i];
}

//The same result using reduce() method

let numbers = [1,2,3,4,5]
let summedArray = numbers.reduce((acc, curr) => acc += curr);
console.log(summedArray); //15