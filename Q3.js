// Question 3: Check for Duplicates
// Function that checks if an array contains duplicates

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

const inputArray3a = [1, 2, 3, 4, 5, 1];
const inputArray3b = [1, 2, 3, 4, 5];
console.log(hasDuplicates(inputArray3a)); // Output: true
console.log(hasDuplicates(inputArray3b)); // Output: false
