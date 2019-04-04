

// Global Var
//=====================================================================
// Arrays and variables needed for holding data
var leslieFavThings = ["waffles", "parks", "ann","little sebastian", "ben"];
var secretWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongGuesses = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


// Functions
//=====================================================================

function startGame () {
    secretWord = leslieFavThings[Math.floor(Math.random() * leslieFavThings.length)];
    console.log(secretWord);
}

// Main Process
//=====================================================================
startGame();