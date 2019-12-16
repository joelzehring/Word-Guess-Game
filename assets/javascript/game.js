// Wheel of Fortune style guessing game. Guess the letters of the word.

// Reset the number of times the user guessed the word
var wins = 0;
// List of words to choose from.
var wordList = ["Phoenix", "Tucson", "Flagstaff", "Nogales", "Cottonwood", "Bisbee", "Tombstone", "Yuma", "Kingman", "Douglas", "Scottsdale", "Glendale", "Mesa", "Tempe", "Chandler", "Gilbert", "Oracle", "Payson", "Prescott"]
// Set the target word to be guessed.
var targetWord = "";
// Initialize an array to store letters the user has guessed.
var userGuessList = [];
// Initiate the number of guesses remanining.
var guessCountDown = 10;
// Represent the user's progress as an array of booleans, one for each letter in the target word.
// False for letters that haven't been guessed yet, true for letters that have already been guessed
var userProgress = [];

function setTargetWord() {
	targetWord = wordList[Math.floor(Math.random() * wordList.length)];
}

function setUserGuessList() {
	userGuessList = [];
}

function setUserProgress(str) {
  for (i of str) {
    userProgress.push(false);
  }
  return userProgress;
}

function newRound() {
	userProgress = [];
	setTargetWord();
	userGuessList = [];
	guessCountDown = 10;
	setUserProgress(targetWord);
}

newRound();

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
	return display;
}

// handle user's guesses

var feedbackDiv = document.getElementById("feedback");

document.onkeypress = function(event) {
	var userGuess = event.key;
	var range = /[A-Za-z]/;
	var masterWord = targetWord.toLowerCase();
	if (range.test(userGuess) && userGuessList.indexOf(userGuess) >= 0) {
	  feedbackDiv.innerHTML = "That letter has already been suggested. Please try again.";
	} else if (range.test(userGuess) && masterWord.indexOf(userGuess) >= 0) {
	  	feedbackDiv.innerHTML = "You're right!";
			userGuessList.push(userGuess);
			for (var i = 0; i < targetWord.length; i++) {
				if (masterWord[i] === userGuess) {
					userProgress[i] = true;
				}
			}
			if (userProgress.indexOf(false) < 0) {
				wins++;
				newRound();
			}
	} else if (range.test(userGuess) && masterWord.indexOf(userGuess) < 0) {
	  	feedbackDiv.innerHTML = "That letter doesn't appear in the word.";
			userGuessList.push(userGuess);
			guessCountDown--;
	}

document.getElementById("target-word").innerHTML = displayWord();

document.getElementById("win-count").innerHTML = "Score: " + wins;

document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + userGuessList.join(" ");

document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + guessCountDown;

document.getElementById("target-word").innerHTML = displayWord().join(" ");

}