//6. To Check Whether Every Element in an Array Meets a Condition

let num = [1,2,3,4,5, 0];

for(i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
        console.log ("%c All elements in an array are equal to 0 or more", "color:#00A662");
    }
}

//The same result using every() method
let style = "color: #00A662; background: #eee; font-size: 16px";
let num = [1,2,3,4,5, 0];
let isZeroOrMore = num.every(number => number >= 0);

if(isZeroOrMore) {
    console.log("%c All elements in an array are equal to 0 or more", style);
}

