//2. Loop through all elements and perform an action

function print(name) {
    console.log(name);
}

let names = ["Jack", "Jecci", "Ram", "Tom"];
for (let i = 0; i < names.length; i++) {
    print(names[i])
}

//The same result using forEach() method

let names = ["Jack", "Jecci", "Ram", "Tom"];
names.forEach(name => console.log(name));
