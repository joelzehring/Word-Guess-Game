// Wheel of Fortune style guessing game. Guess the letters of the word.
 /*
var feedbackText = document.getElementById("feedback").innerHTML;
var winText = document.getElementById("win-count").innerHTML;
var targetText = document.getElementById("target-word").innerHTML;
var guessRemainText = document.getElementById("guesses-remaining").innerHTML;
var lettersText = document.getElementById("letters-guessed").innerHTML;
*/

// Reset the number of times the user guessed the word
var wins = 0;

// Set the target word to be guessed.
var targetWord = "hello";

// Represent the user's progress as an array of booleans, one for each letter in the target word.
// False for letters that haven't been guessed yet, true for letters that have already been guessed
var userProgress = [false,false,false,false,false];

// Initiate an array to store letters the user has guessed.
var userGuessList = [];

// Initiate the number of guesses remanining.
var guessCountDown = 10;

// Display the word with un-guessed letters hidden
function displayWord() {
  var display = [];
  for (var i = 0; i < userProgress.length; i++) {
    if (userProgress[i] === false) {
      display.push("_");
    }
    else {
      display.push(targetWord[i]);
    }
  }
	document.getElementById("target-word").innerHTML = display.join(" ");
}

displayWord();

// handle user's guesses

var feedbackDiv = document.getElementById("feedback");

document.onkeypress = function(event) {
	var userGuess = event.key;
	var range = /[A-Za-z]/;
	if (range.test(userGuess) && userGuessList.indexOf(userGuess) >= 0) {
	  feedbackDiv.innerHTML = "That letter has already been suggested. Please try again.";
		userGuessList.push(userGuess);
	} else if (range.test(userGuess) && targetWord.indexOf(userGuess) >= 0) {
	  	feedbackDiv.innerHTML = "You're right!";
			userGuessList.push(userGuess);
			for (var i = 0; i < targetWord.length; i++) {
				if (targetWord[i] === userGuess) {
					userProgress[i] = true;
				}
			}
	} else if (range.test(userGuess) && targetWord.indexOf(userGuess) < 0) {
	  	feedbackDiv.innerHTML = "That letter doesn't appear in the word.";
			userGuessList.push(userGuess);
	}

	var targetHTML = document.getElementById("target-word").innerHTML;
	targetHTML = displayWord();

	console.log(userGuessList)
}