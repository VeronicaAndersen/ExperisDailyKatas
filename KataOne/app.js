let twoPointer;
let threePointer;

points(1, 1);
points(7, 5);
// points(38,8);
// points(0,1);
// points(0, 0);

// function with parameters that calculate the points and the return it.
function points(twoPointer, threePointer) {
  finalPoints = twoPointer * 2 + threePointer * 3;
  return finalPoints;
}
// console.log(finalPoints);
document.getElementById("points").innerHTML = "Total points: " + finalPoints;



/*__________________________Splitword__________________________*/

function splitOnDoubleLetter(word) {
  let previousLetter = word[0];
  let placeHolder = 0;
  let result = [];
  let splitWord = "";
  let matchFound = false;

  for (let i = 1; i < word.length; i++) {
    // previousLetter = word[i];

    if (previousLetter == word[i]) {
      splitWord = word.substring(placeHolder, i);
      result.push(splitWord)
      placeHolder = i;
      matchFound = true;
    }

    result.push(word.substring(placeHolder, word.length))
    // previousLetter = word[i];

    if (matchFound == true) {
      result.push(word.substring(placeHolder, word.length));
      word.substring();
    }
  }
  return result;
}

console.log(splitOnDoubleLetter("happy"));
console.log(splitOnDoubleLetter("easy"));
