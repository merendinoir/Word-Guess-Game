

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
    lettersinWord = secretWord.split("");
    numBlanks = lettersinWord.length;

    //Reset 
    guessesLeft = 10;
    wrongGuesses = [];
    blanksAndSucesses = [];

    //Drop right number of blanks and successes 
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSucesses.push("_");
    }

    //Push data into the HTML
    document.getElementById("wordsToGuess").innerHTML = blanksAndSucesses.join(" ");
    
    
    //Testing
    console.log(secretWord);
    console.log(lettersinWord)
    console.log(numBlanks)
    console.log(blanksAndSucesses)
}

// Main Process
//=====================================================================
startGame();