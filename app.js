
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

// 3. Function that checks if a character is a vowel
function isCharAVowel(char) {
    //y is a fencesitter 
    char = char.toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    return false;
}

console.log(isCharAVowel('A'));

//4. Function that returns the sum of an array
function sumOfArray(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log(sumOfArray([-1,2.2,3,4,5]));

//5. Function that returns the product of an array
function productOfArray(arr) {
    let product = 1;
    arr.forEach(num => {
        product *= num;
    });
    return product;
}

console.log(productOfArray([-1,3,5]));

//6. Function that returns the number of arguments
function numArgs(...args) {
    return args.length;
}

console.log(numArgs(1,2,5,6,7,8,9,10));
