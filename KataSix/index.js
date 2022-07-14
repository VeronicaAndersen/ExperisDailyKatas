


function checkNumberOfBomerangs(bomerangArray) {
    let total = 0;

    for (let i = 0; i < bomerangArray.length; i++) {
    
        if ( bomerangArray[i] === bomerangArray[i - 2] && bomerangArray[i] != bomerangArray[i-1]) {
            total++;
        }
    }
    return total;
    
}


console.log(checkNumberOfBomerangs([9, 5, 9, 5, 1, 1, 1]) + " : 2");
console.log(checkNumberOfBomerangs([5, 6, 6, 7, 6, 3, 9]) + " : 1");
console.log(checkNumberOfBomerangs([4, 4, 4, 9, 9, 9, 9]) + " : 0");
console.log(checkNumberOfBomerangs([1, 7, 1, 7, 1, 7, 1]) + " : 5");
console.log(checkNumberOfBomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) + " : 3");