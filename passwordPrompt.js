// Declare the choosen password 
let password = "annReal";

// This is the where the user try to guess the correct password
let userGuess;

// Using a do-while loop to keep asking for the password until it matches the correct one
do {
    userGuess = prompt("Enter your password: ");
    
    if (userGuess != password) {
      console.log("Incorrect, try again");
    }
    
} while (userGuess != password)

// The last console should be outside the loop so that if the user guess the correct password the program will be stop
console.log("Access Granted"); 