// Create a random number generator
// Need to use:
//  1) prompt() dialogue to collect user input
//  2) parseInt() function to convert the input to an integer
//  3) Math.random() method to create a random number

// Ask for one number
// var userInput = prompt('Please type a number');
// var topNumber = parseInt(userInput);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";
// document.write(message);

// Ask for two numbers
var input1 = prompt('Please type a starting number');
var bottomNumber = parseInt(input1);
var input = prompt('Please type an ending number');
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);
