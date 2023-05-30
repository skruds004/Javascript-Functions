
// 1. Function that returns the maximum of two numbers
function maxOfTwoNumbers(x ,y) {
    return x >= y ? x : y;
}

console.log(maxOfTwoNumbers(10, 20));

// 2. Function that returns the maximum of three numbers
function maxOfThreeNumbers(x,y,z) {
    let numArray = [x,y,z];
    numArray.sort((a,b) => a - b);
    return numArray[2];
}

console.log(maxOfThreeNumbers(123123, 40, 30));

function isCharAVowel(char) {
    //y is a fencesitter 
    char = char.toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    return false;
}

console.log(isCharAVowel('A'));