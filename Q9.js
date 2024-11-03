// Question 9: Remove Falsy Values from an Array
// Function that removes all falsy values from an array

function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

const inputArray9 = [0, 1, false, 2, '', 3];
console.log(removeFalsyValues(inputArray9)); // Output: [1, 2, 3]