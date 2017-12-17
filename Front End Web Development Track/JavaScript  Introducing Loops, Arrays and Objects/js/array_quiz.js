// DECLARE VARIABLES AT THE TOP OF JS FILES
// 1. Create a two-dimensional array to hold the
// questions and their answers
// 2. Create a variable to keep track of correct answers
// 3. Define other variable that will be needed
var questions = [
    ['What is my age?', 45],
    ['What is my dog\'s age?', 8],
    ['What is my cat\'s age', 10]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

// 4. Include the print function to make it easier to
// print to the HTML page
function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// 7. Create a new function that:
//      a. accepts an array as a parameter
//      b. then loops through that array constructing
//         the HTML for an ordered list
function buildList(arr) {
    var listHTML = '<ol>';
    
    for (var i = 0; i <arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

// 5. Create a for loop to go thru the questions
// and answers and get the response
for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    // 6. Test to see if response = answer
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

// 6. Print the number of correct answers to the page
html = 'You got ' + correctAnswers + ' question(s) right.';

// 8. Print the list of questions the user got right
html += '<h2>You got these questions right:</h2>';
html += buildList(correct);

// 9. Print the list of questions the user got wrong
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);

// 10. Use the print function to print out all
// the HTML code to the page
print(html);


