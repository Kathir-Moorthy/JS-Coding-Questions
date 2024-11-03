// Question 7: Find the Intersection of Two Arrays
// Function that returns the intersection of two arrays

function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

const inputArray7a = [1, 2, 3];
const inputArray7b = [2, 3, 4];
console.log(arrayIntersection(inputArray7a, inputArray7b)); // Output: [2, 3]