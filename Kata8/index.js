// Return the Objects Keys and Values.
// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(objects) {
    let keys = [];
    let values = [];
    let totalArray = [];
    
        Object.keys(objects).forEach(key => { keys.push(key); values.push(objects[key]) });
        totalArray.push(keys, values);
        return console.log(totalArray);

}

keysAndValues({ a: 1, b: 2, c: 3 })  //➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })  //➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })  //➞ [["key1", "key2", "key3"], [true, false, undefined]]




// // How much is true?
// // Create a function which returns the number of true values there are in an array.

// // Notes
// // - Return 0 if given an empty array.
// // - All array items are of the type bool (true or false).

// function countTrue(array) {
//     let totalTrue = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === true) {
//             totalTrue++;
//         }
//     }

//     return totalTrue;
// }

// console.log(countTrue([true, false, false, true, false])) // ➞ 2
// console.log(countTrue([true, true, true, true, true])) // ➞ 5
// console.log(countTrue([false, false, false, false])) // ➞ 0
// console.log(countTrue([])) // ➞ 0