// Wheel of Fortune style guessing game. Guess the letters of the word.

// Set the target word to be guessed.

var targetWord = "hello";

// Represent the user's progress as an array of booleans, one for each letter in the target word. False for letters that haven't been guessed yet, true for letters that have already been guessed.

var userProgress = [false,false,false,false,false];

// Initiate an array to store letters the user has guessed.

var userGuessList = [];

// Display the word with un-guessed letters hidden

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

// handle user's guesses in alerts

var nextGuess = prompt("Guess a letter: " + displayWord(userProgress));

if (/[A-z]/.test(nextGuess) && userGuessList.indexOf(nextGuess) >= 0) {
    alert("That letter has already been suggested. Please try again.");
} else if (/[A-z]/.test(nextGuess) && targetWord.indexOf(nextGuess) >= 0) {
    alert("You're right!");
} else if (/[A-z]/.test(nextGuess) && targetWord.indexOf(nextGuess) < 0) {
  alert("That letter doesn't appear in the word.");
}
  
/*

document.onkeyup = function(event)
  var userGuess = event.key;
  if (if userGuess == /[A-z]/ && userGuessList.indexOf(userGuess) {
    console.log("That letter has already been suggested. Please try again.")
  } else if (userGuess == /[A-z]/ && targetWord.indexOf(userGuess)) {
    console.log("You're right!");
  }
}

*/

console.log(displayWord(userProgress));