function generateIntegers(m, n) {
    let arr = [];
    let num = m;
    while (n >= num) {
        arr.push(num)
        num++;
    }
    return arr;
}

generateIntegers(2, 5);