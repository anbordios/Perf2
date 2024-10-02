let password = "annReal";
let userGuess;

do {
    userGuess = prompt("Enter your password: ");
    
    if (userGuess != password) {
      console.log("Incorrect, try again");
    }
    
} while (userGuess != password)

console.log("Access Granted");