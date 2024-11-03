// Question 1: Reverse an Array
// Function that takes an array and returns it in reverse order

function reverseArray(arr) {
    return arr.slice().reverse();
}

const inputArray1 = [1, 2, 3, 4, 5];
console.log(reverseArray(inputArray1)); // Output: [5, 4, 3, 2, 1]
