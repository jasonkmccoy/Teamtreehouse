// Instructions

/*
 Step 1: Program has to ask at least 5 questions
 Step 2: Keep track of the number of questions the user answered correctly
 Step 3: Provide a final message after the quiz is complete letting 
 the user know how many questions he or she got right.
 Step 4: Rank the player:
    a) if player answers all 5 correctly, give them gold crown
    b) 3 to 4 correct, silver crown
    c) 1 to 2 correct, bronze crown
    d) 0 correct, no crown at all
*/



// create variables for questions
var firstQuestion = prompt('What is the capital of North Carolina?');
var secondQuestion = prompt('Who makes the iPhone?');
var thirdQuestion = prompt('Who is Winnie the Pooh\'s best friend?');
var fourthQuestion = prompt('What is my cat\'s name?');
var fifthQuestion = prompt('What is my dog\'s name?');

// create variable that keeps track of number of correct responses
var score = 0;

// create loops that check the user's answers
if (firstQuestion.toUpperCase() === 'RALEIGH') {
    
    score += 1;
}

if (secondQuestion.toUpperCase() === 'APPLE') {
    score += 1;
}

if (thirdQuestion.toUpperCase() === 'TIGGER') {
    score += 1;
}

if (fourthQuestion.toUpperCase() === 'COONIE') {
    score += 1;
}

if (fifthQuestion.toUpperCase() === 'GRACIE') {
    score += 1;
}

// output results
document.write("<p>You got " + score + " out of 5 questions correct.<p>");

if ( score === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (score === 4 || score === 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (score === 2 || score === 1) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");  
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}