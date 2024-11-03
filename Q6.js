// Question 6: Group Array of Objects by Property
// Function that groups an array of objects by a specific property

function groupByProperty(arr, property) {
    const result = {};
    for (const obj of arr) {
        const key = obj[property];
        (result[key] ||= []).push(obj);
    }
    return result;
}

const inputArray6 = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
];
console.log(groupByProperty(inputArray6, 'category'));
// Output:
// {
//     fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ],
//     vegetable: [ { id: 2, category: 'vegetable' } ]
// }
