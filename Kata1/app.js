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



// splitOnDoubleLetter(‘Letter’) -> [‘let’, ‘ter’]

// splitOnDoubleLetter(‘Really’) -> [‘real’, ‘ly’]

// splitOnDoubleLetter(‘Happy’) -> [‘hap’, ‘py’]

// splitOnDoubleLetter(‘Shall’) -> [‘shal’, ‘l’]

// splitOnDoubleLetter(‘Tool’) -> [‘to’, ‘ol’]

// splitOnDoubleLetter(‘Mississippi’) -> [‘Mis’, ‘sis’, ‘sip’, ‘pi’]

// splitOnDoubleLetter(‘Easy) returns []

function splitOnDoubleLetter(word) {
  let previousLetter = word[0];
  let placeHolder = 0; 
  let splitWord = "";
  let result = [];
  let matchFound = false;

  for (let i = 0; i < word.length; i++) {
    if(previousLetter == word[i]){
      splitWord = word.substring(placeHolder, i);
      result.push(splitWord);
      placeHolder = i;
      matchFound = true;
    }
    previousLetter = word[i];
  }

  if (matchFound == true) {
    result.push(word.substring(placeHolder, word.length));
    word.substring();
  }

  return result;
}

console.log(splitOnDoubleLetter("Letter"));
console.log(splitOnDoubleLetter("Really"));
console.log(splitOnDoubleLetter("Happy"));
console.log(splitOnDoubleLetter("Shall"));
console.log(splitOnDoubleLetter("Tool"));
console.log(splitOnDoubleLetter("Mississippi"));
console.log(splitOnDoubleLetter("Easy"));