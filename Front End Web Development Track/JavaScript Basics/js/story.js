// The Story Making Game
// Instructions:
// 1. Create a variable and capture input using prompt("Ask a question.")
// 2. Create a separate variable for each piece of input
// 3. Add an alert to tell the visitor that they're finished
// 4. Combine the input with other strings to create a message
// 5. Print the story to the browser window with document.write()
// Text that should display on the page:
// There once was a brave programmer who wanted to use JavaScript to change the world.

var adjective = prompt ("Type in an adjective");
var verb = prompt ("Type in a verb");
var noun = prompt ("Type in a noun");
alert('You are finished!');
var combinedInput = "<h2>" + "There once was a " + adjective;
combinedInput += " programmer who " + verb;
combinedInput += " to use JavaScript to change";
combinedInput += " the " + noun + "</h2>";
document.write(combinedInput);
