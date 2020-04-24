//5. Checking if an Array Contains a Value

let names = ["ram", "raj", "rahul"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === "rahul") {
        console.log("rahul is on the list");
    }
}

//The same result using some() method

let names = ["ram", "raj", "rahul"];
let isOnTheList = names.some(name => name === "rahul");
if(isOnTheList) {
    console.log('%c rahul is on the list', "color:#00A662");
};

//The same result using find() method

let names = ["ram", "raj", "rahul"];
let isOnTheList = names.find(name => name === "rahul");
if(isOnTheList) {
    console.log('%c rahul is on the list', "color:#00A662");
};
