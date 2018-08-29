// Sets the array of words for the game.
var wordBank = [
                "Die-Hard", 
                "Fifth-Element", 
                "Total-Recall", 
                "Speed", 
                "GoldenEye",
                "Starship-Troopers",
                "Pulp-Fiction",
                "Resevior-Dogs",
                "Fight-Club",
                "Blade"
                ];

// Sets the total number of guesses to a consta


// Sets the storage arrays for various needed elements
var wins = 0;
var losses = 0;
var userWordGuesses = [];



// sets up the computer choice to dertermine a random word
var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
// shows in the console is the computerGuess works and returns a word
console.log(computerGuess)




