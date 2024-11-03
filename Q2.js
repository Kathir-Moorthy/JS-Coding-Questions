// Question 2: Flatten an Array
// Function that takes a nested array and flattens it to a single-level array

function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

const inputArray2 = [1, [2, 3], [4, [5]]];
console.log(flattenArray(inputArray2)); // Output: [1, 2, 3, 4, 5]
