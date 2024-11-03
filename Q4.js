// Question 4: Merge Two Objects
// Function that merges two objects into one

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 2, c: 4 };
console.log(mergeObjects(object1, object2)); // Output: { a: 1, b: 2, c: 4 }
