
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
// An empty array should return 0.

let array = [1, [2, 3]];
array = [1, [2, [3, 4]]];
array = [1, [2, [3, [4, [5, 6]]]]];
array = [1, [2], 1, [2], 1];
// array = [];

function countArray(array) {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            counter += countArray(array[i]);
        } else {
            counter++;
        }
    }
    return counter;
}
console.log(countArray(array));