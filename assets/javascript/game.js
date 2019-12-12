// Wheel of Fortune style guessing game. Guess the letters of the word.

// Wheel of Fortune style guessing game. Guess the letters of the word.

var targetWord = "hello";

var userProgress = [false,false,false,false,false];

function displayWord(arr) {
  var result = [];
  for (i of arr) {
    if (i === false) {
      result.push("_");
    }
    else {
      result.push(targetWord[i]);
    }
  }
  
  return result.join(" ");
}

console.log(displayWord(userProgress));