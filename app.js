
// 1. Function that returns the maximum of two numbers
function maxOfTwoNumbers(x ,y) {
    return x >= y ? x : y;
}

console.log(maxOfTwoNumbers(10, 20));

// 2. Function that returns the maximum of three numbers
const maxOfThreeNumbers = function(x,y,z) {
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
const sumOfArray = function(arr) {
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
const numArgs = function(...args) {
    return args.length;
}

console.log(numArgs(1,2,5,6,7,8,9,10));

//7. Function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello world'));

//8. Retuns the longest string in an array of strings
const longestStringInArray = function(strings) {
    let len = 0;
    strings.forEach(str => {
        if (str.length > len) {
            len = str.length;
        }
    });
    return len;
}

console.log(longestStringInArray(["gub", "hello guy", "world", "and", "me"]));

//9. Returns an array of strings longer than the strings in the array
function stringsLongerThan(strings, num) {
    let longerStrings = [];
    strings.forEach(str => {
        if(str.length > num) {
            longerStrings.push(str);
        }
    });
    return longerStrings;
}

console.log(stringsLongerThan(["gub", "hello", "world", "and", "me"], 3));