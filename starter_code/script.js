// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function() {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var firstArray = ["rock", "paper", "scissors"];
    var myNumber = Math.floor(Math.random() * 3);
    $("#rockpic").hide();
    $("#paperpic").hide();
    $("#scissorspic").hide();



    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    var choice = firstArray[myNumber];
    if (choice == firstArray[0]) {
        $("#rockpic").show(); 
    }
    else if (choice === firstArray[1]) {
        $("#paperpic").show();
    }
    else  {
        $("#scissorspic").show();
    }
    
   
    
   
    return choice;
    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function(userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    var winner;
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
    if (userChoice === "rock" && computerChoice === "scissors") {
        winner = "User";
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        winner = "Computer";
    }
    else if (userChoice === "rock" && computerChoice === "rock") {
        winner = "Draw";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        winner = "Computer";
    }
    else if (userChoice === "paper" && computerChoice === "paper") {
        winner = "Draw";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        winner = "User";
    }
    else if (userChoice === "scissors" && computerChoice === "scissors") {
        winner = "Draw";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        winner = "User";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        winner = "Computer";
    }
    console.log("Winner: " + winner);
    $("#winner").html(winner)
        // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
        // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {
    $("#rockpic").hide();
    $("#paperpic").hide();
    $("#scissorspic").hide();


    $("#rock").click(function() {
        var userChoice = "rock";
        var computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
    });
    $("#paper").click(function() {
        var userChoice = "paper";
        var computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
        $("#scissors").click(function() {
        var userChoice = "scissors";
        var computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
        
        var CPUwins;
        var Userwins;
        if (pickWinner === computerChoice) {
        
    }
    });
    });
    
    
    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
  
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    

});
