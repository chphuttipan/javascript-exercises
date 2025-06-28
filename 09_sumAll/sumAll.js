const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR";
    if (numOne > numTwo) {
        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }
    if (numOne < 0 || numTwo < 0) return "ERROR";

    // Start to run the codes after pass all criteria
    let value = 0;
    for (let i = numOne; i <= numTwo; i++) {
        value += i;
    }
    return value;
};

console.log(sumAll(3, -1));
// Do not edit below this line
module.exports = sumAll;
