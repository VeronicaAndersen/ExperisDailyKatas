// Given a sentence with numbers representing a word's location
// embedded within each word, return the sorted sentence

function rearrange(sentence) {
    let array = sentence.split(" ")
    let corrOrder = [];
    let result;

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('1')) corrOrder[0] = array[i].replace(/[0-9]/g, ''); 
        if (array[i].includes('2')) corrOrder[1] = array[i].replace(/[0-9]/g, '');
        if (array[i].includes('3')) corrOrder[2] = array[i].replace(/[0-9]/g, '');
        if (array[i].includes('4')) corrOrder[3] = array[i].replace(/[0-9]/g, '');
        if (array[i].includes('5')) corrOrder[4] = array[i].replace(/[0-9]/g, '');
        if (array[i].includes('6')) corrOrder[5] = array[i].replace(/[0-9]/g, '');
        
    }
    result = corrOrder.toString()
    for (let s = 0; s < result.length; s++) result = result.replace(",", " ")
    
    console.log(result);
}

rearrange("is2 Thi1s T4est 3a") // ➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") // ➞ "For the good of the people"
rearrange("5weird i2s JavaScri1pt dam4n so3") // ➞ "JavaScript is so damn weird"
rearrange(" ") // ➞ ""
