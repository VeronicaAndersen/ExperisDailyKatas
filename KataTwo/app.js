let n = 50;

for (let i = 0; i < n; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*__________________________FizzBuzz__________________________*/


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

