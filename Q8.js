// Question 8: Calculate the Sum of Array Elements
// Function that calculates the sum of all numbers in an array

function sumArrayElements(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

const inputArray8 = [1, 2, 3, 4, 5];
console.log(sumArrayElements(inputArray8)); // Output: 15