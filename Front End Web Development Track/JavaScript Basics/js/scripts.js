// Step 1: variables
// var message = "Hello!";
// alert(message);
// message = "Welcome to JavaScript Basics";
// alert(message);

// Step 2: the prompt () method
// var visitorName = prompt("What is your name?");
// alert(visitorName);
// console.log(visitorName);

// Step 3: combining strings
// var visitor = prompt("What is your name?");
// var message = "Hello " + visitor + ", Welcome to Treehouse. ";
// message += "We are so glad that you came to visit, ";
// message += visitor;
// message += ", Please come again, when you want to learn more.";
// document.write(message);

// Step 4: text properties
// var passphrase = "Open Sesame";
// console.log(passphrase.length);


// Step 5: text methods
// console.log (passphrase.toLowerCase());
// console.log(passphrase);
// console.log(passphrase.toUpperCase());
// console.log(passphrase);

// Step 6: Shout webapp
//var stringToShout = prompt("What should I Shout?");
// var shout = stringToShout.toUpperCase();
// shout += "!!!";
// alert(shout);

// Step 7: calculate the number of seconds in a day
// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// document.write("<h2>" + secondsPerDay + "</h2>");

//Seconds I've been alive
// var yearsAlive = 45;
// var daysInYear = 365;
// var secondsAlive = secondsPerDay * daysInYear * yearsAlive;
// document.write("<h2>" + secondsAlive + "</h2>");

// Step 8: convert strings to integers using parseInt
// var HTMLBadges = prompt("How many HTML badges do you have?");
// var CSSBadges = prompt("How many CSS badges do you have?");
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// alert("Wow! You have " + totalBadges + " badges!");

// Step 9: convert strings to integers using parseFloat
// var HTMLBadges = prompt("How many HTML badges do you have?");
// var CSSBadges = prompt("How many CSS badges do you have?");
// var totalBadges = parseFloat(HTMLBadges) + parseFloat(CSSBadges);
// alert("Wow! You have " + totalBadges + " badges!");

// Step 10: Expand the story challenge to work with numbers
// Tell the user how many questions are left to answer
// var questions = 3;
// var questionsLeft = " [" + questions + " questions left]";
// var adjective = prompt ("Type in an adjective" + questionsLeft);
// questions -= 1;
// questionsLeft = " [" + questions + " questions left]";
// var verb = prompt ("Type in a verb" + questionsLeft);
// questions -= 1;
// questionsLeft = " [" + questions + " question left]";
// var noun = prompt ("Type in a noun" + questionsLeft);
// alert('You are finished!');
// var combinedInput = "<h2>" + "There once was a " + adjective;
// combinedInput += " programmer who " + verb;
// combinedInput += " to use JavaScript to change";
// combinedInput += " the " + noun + "</h2>";
// document.write(combinedInput);

// Step 10: The Math Object using the round method
// alert(Math.round(2.2));

// Create a random number
// alert(Math.random());
// generate a number between 1 and 6
// alert(Math.floor(Math.random() * 6) + 1);

// create a roll of the dice alert
// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert('You rolled a ' + dieRoll);

// Step 11: Introducing Conditional Statements
// var answer = prompt("What programming language is the name of a gem?");
//
// if(answer.toUpperCase() === 'RUBY') {
//   document.write("<p>That's right!</p>");
// } else {
//    document.write("<p>That's wrong!</p>");
// }

// Step 12: Comparison Operators
// Triple equals (===) is the prefered comparsion operator over double equals (==)
// Just remember to use === when checking to see if two values are equal
// The (===) checks the type of each of the values being checked
// If comparing numbers, both values must be a number data type to be true
// For example, '3' === 3 would be false because the first value is a string and 
// the second value is a number.  In order to be true, it must be 3 === 3

// Step 13: Create a random number and have the user try to guess the number
//var randomNumber = Math.floor(Math.random() * 6) +1;
//var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");
//
//if (parseInt(guess) === randomNumber) {
//    document.write('<p>That\'s Right!</p>');
//} else {
//    document.write('<p>Sorry.  The number was ' + randomNumber + '</p>');
//}

// Step 14: Booleans (i.e. true or false)
//if (true) {
//    document.write('The condition is true');
//} else {
//    document.write('The condition is false');
//}
//
//if (false) {
//    document.write('The condition is true');
//} else {
//    document.write('The condition is false');
//}

// Step 15: Test booleans with the random number game
//var correctGuess = false;
//var randomNumber = Math.floor(Math.random() * 6) +1;
//var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");
//
//if (parseInt(guess) === randomNumber) {
//    correctGuess = true;
//}
//
//if (correctGuess === true) {
//    document.write('<p>You guessed the number!');
//} else {
//    document.write('<p>Sorry.  The number was ' + randomNumber + '</p>');
//}

// Step 16: Else if clause to handle multiple boolean values
//if () {
//    
//} else if () {
//    
//} else {
//    
//}

// Step 17: Use else if in the random number game
//var correctGuess = false;
//var randomNumber = Math.floor(Math.random() * 6) +1;
//var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");
//
//if (parseInt(guess) === randomNumber) {
//    correctGuess = true;
//}
//
//if (correctGuess === true) {
//    document.write('<p>You guessed the number!');
//
//} else if(parseInt(guess) < randomNumber) {
//    var guessMore = prompt('Try again.  The number I am thinking of is more than ' + guess);
//    if (parseInt(guessMore) === randomNumber) {
//        correctGuess = true;
//    }
//} else if(parseInt(guess) > randomNumber) {
//   var guessLess = prompt('Try again.  The number I am thinking of is less than ' + guess);
//   if (parseInt(guessLess) === randomNumber) {
//        correctGuess = true;
//    }
//}
//
//if (correctGuess === true) {
//    document.write('<p>You guessed the number!');
//} else {
//    document.write('<p>Sorry.  The number was ' + randomNumber + '</p>');
//}

// Step 18: Add comments to programs to make it easier to know how the code works

// This is a single-line comment

/*

    This is a multiple-line comment.
    Everything here is ignored.
    
*/

// Add comments to the random number game to make it easier to understand

/*
    The Random Number Guessing Game
    Generates a random number between 1 and 6
    and gives the user two attempts to 
    guess the number.
    
*/

// assume the user didn't guess correctly
//var correctGuess = false;

// generate a random number from 1 to 6
//var randomNumber = Math.floor(Math.random() * 6) +1;
//var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");

/* 
    Test to see if player is:
    1. correct
    2. guessed too high
    2. guessed too low
*/
//if (parseInt(guess) === randomNumber) {
//    correctGuess = true;
//}

//if (correctGuess === true) {
//    document.write('<p>You guessed the number!');
//
//} else if(parseInt(guess) < randomNumber) {
//    var guessMore = prompt('Try again.  The number I am thinking of is more than ' + guess);
//    if (parseInt(guessMore) === randomNumber) {
//        correctGuess = true;
//    }
//} else if(parseInt(guess) > randomNumber) {
//   var guessLess = prompt('Try again.  The number I am thinking of is less than ' + guess);
//   if (parseInt(guessLess) === randomNumber) {
//        correctGuess = true;
//    }
//}

// test if user is correct or not, print out a response
//if (correctGuess === true) {
//    document.write('<p>You guessed the number!');
//} else {
//    document.write('<p>Sorry.  The number was ' + randomNumber + '</p>');
//}


// Step 19: Combining Multiple Tests Into a Single Condition (AND / OR)
// In JavaScript the AND operator is &&
// example using &&
// (20 < age && age < 30)
// In JavaScript the OR operator is ||

// Step 20: Introducing Functions
// Create a function that shows an alert for a random number between 1 and 6
//function alertRandom () {
//    var randomNumber = Math.floor(Math.random() * 6) + 1;
//    alert(randomNumber);
//}
//alertRandom();

// anonymous function
//var alertRandom = function () {
//    var randomNumber = Math.floor(Math.random() * 6) + 1;
//    alert(randomNumber);
//};
//alertRandom();

// Step 21: Returning Information From a Function
//function goToCoffeeShop () {
//    return "Espresso is on its way.";
//}
//alert(goToCoffeeShop());

// randomNumber example
//function getRandomNumber () {
//    var randomNumber = Math.floor(Math.random() * 6) + 1;
//    return randomNumber;
//}
//alert(getRandomNumber());
//console.log(getRandomNumber());
//var dieRoll = getRandomNumber();

// is email empty example
//function isEmailEmpty () {
//    var field = document.getElementById('email');
//    if (field.value === '') {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//var fieldTest = isEmailEmpty();
//if (fieldTest === true) {
//    alert('Please enter your email address.');
//}

// return should be last line of code in a function
// example that uses return wrong
//function noAlert() {
//    return 5;
//    alert("This won't appear");
//}
//
//noAlert();
//alert("This will appear!");

// return can only return one value

// Step 22: Sending Information to Functions
//function goToCoffeeShop (drink) {
//    alert(drink + ' is on the way!');
//}
//goToCoffeeShop('Coke');

// randomNumber generator example
//function getRandomNumber (upper) {
//    var randomNumber = Math.floor(Math.random() * upper) + 1;
//    return randomNumber;
//}
//console.log(getRandomNumber(6));

// function that has multiple arguments
//function goToCoffeeShop (drink, pastry) {
//    alert(drink + " and " + pastry + ' are on the way!');
//}
//goToCoffeeShop('Coke', 'Donut');

// another example of a function with multiple parameters
//function getArea (width, length, unit) {
//    var area = width * length;
//    return area + " " + unit;
//}
//alert(getArea(10, 20, 'sq ft'));

// Step 23: Variable Scope

// Simple Example
//function greeting() {
//    var person = 'Jason';
//    alert(person);
//}
//var person = 'George';
// Function Scope
//greeting();

// Global Scope
//alert(person);

// Function Scope
//greeting();








































































