// Check if a string is empty the return 0.

export function testRegex(emptyString) {
    let regex = "^$";

    if (emptyString.match(regex)) {
        emptyString = 0;
    }else{
        emptyString = 1;
    }
    return emptyString;
}





















// export function points(twoPointers, threePointers){
//     let twoPointersTotal = twoPointers * 2;
//     let threePointersTotal = threePointers * 3;

//     return twoPointersTotal + threePointersTotal;
// }

// export function points(twoPointers, threePointers){
//     return (twoPointers * 2) + (threePointers * 3);
// }
