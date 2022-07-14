
let array = [9, 5, 9, 5, 1, 1, 1] // ➞ 2
array = [5, 6, 6, 7, 6, 3, 9] // ➞ 1
array = [4, 4, 4, 9, 9, 9, 9] // ➞ 0
array = [1, 7, 1, 7, 1, 7, 1] // ➞ 5
let total = 0;
function checkNumberOfBomerangs() {
    

    for (let i = 0; i < array.length; i++) {
    
        if ( array[i] === array[i - 2] && array[i] !== array[i-1]) {
            total++;
        }
    }
    return total;
    
}

console.log(checkNumberOfBomerangs());