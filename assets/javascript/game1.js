
var feedback = {
	text: document.getElementById("feedback").innerHTML,

}

var score = {
	text: document.getElementById("win-count").innerHTML,

}

var game = {
	targetHTML: document.getElementById("target-word").innerHTML,
	guessHTML: document.getElementById("guesses-remaining").innerHTML,
	lettersHTML: document.getElementById("letters-guessed").innerHTML,
	targetWord: "hello",
	userProgress: [false,false,false,false,false,],
	userGuessList: [],
	guessCountDown: 10,

	hideWord: function() {
		var result = [];
  	for (var i = 0; i < this.userProgress; i++) {
    	if (i === false) {
    	  result.push("_");
    	}
    	else {
    	  result.push(targetWord[i]);
			}
			return result;
		}
	},
}

console.log(game.targetWord);
console.log(game.hideWord());