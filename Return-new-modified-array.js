//1. To Loop Through All Elements and Get an new modified array

let names = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNames = [];
for(let i = 0; i < names.length; i++) {
    upperCaseNames[i] = names[i].toUpperCase();
}

console.log(upperCaseNames);

//The same result using map() method


let names = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);