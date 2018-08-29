// sets up the library of letters variable for the game.
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creates the holding array for wins, losses, and guesses
var wins = 0;
var losses = 0;
var guesses = 5;

// sets up a variable to hold the computerGuess
var computerGuess;



// Once the user presses a letter the following runs to check it against the computerGuess
document.onkeypress = function(event){
    var userGuess = event.key;
    // checks to see if the user input was detected.
    console.log(userGuess)

    // creates the if else statement to check the userGuess against the computerGuess
    if (userGuess === computerGuess){
        wins++;
        console.log(wins);
        confirm ("You won! Would you like to play again?");
    }
    if (confirm === true){
        guesses = 5;
        console.log(guesses);
        return;
    } 
    else {
        guesses--;
        console.log(guesses)
    }

    if (guesses === 0){
        losses++;
       confirm("You have lost would you like to replay?");
       guesses = 5;
       console.log(guesses);
    }
    if (confirm === true){
        newGame();
        return;
    }


    //Creates Variable to hole the inner html inside the javascript 
        var html = 
            "<p>You chose: " + userGuess + "</p>" +
            "<p>guesses: " + guesses + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>";
    //  Set the innter html of the #game div to our html string
    document.querySelector("#psyGame").innerHTML = html;
    



    // document.getElementById("psyGame").innerHTML = wins;

    return;
};

function newGame() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // shows in the console is the computerGuess works and returns a letter
    console.log("Computer Guess", computerGuess);
}

newGame();
