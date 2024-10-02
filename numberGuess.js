let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

let guessNumber = 0; // This is the declaration of number wherein the user try to guess the number between 1 and 10

while (guessNumber != randomNumber) {
    guessNumber = prompt("Guess a number between 1 and 10: "); // Using a while loop to keep asking until the user guesses the correct number
    if (guessNumber < randomNumber){
        console.log("Too Low!");
    } else if (guessNumber > randomNumber){
        console.log("Too High!");
    } else {
      console.log("Correct!");
    }
}