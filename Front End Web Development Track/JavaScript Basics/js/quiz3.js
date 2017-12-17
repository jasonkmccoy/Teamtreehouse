var firstQuestion = prompt('What is 1?'); 
var secondQuestion = prompt('What is 1?');
var thirdQuestion = prompt('What is 1?');
var fourthQuestion = prompt('What is 1?');
var fifthQuestion = prompt('What is 1?');

score = 0;

if (firstQuestion.toUpperCase() === '1') {
    score += 1;
}
if (secondQuestion.toUpperCase() === '1') {
    score += 1;
}
if (thirdQuestion.toUpperCase() === '1') {
    score += 1;
}
if (fourthQuestion.toUpperCase() === '1') {
    score += 1;
}
if (fifthQuestion.toUpperCase() === '1') {
    score += 1;
}

if (score === 5) {
    document.write('5');
} else if (score === 4 || score === 3) {
    document.write('silver');
} else if (score === 2 || score === 1) {
    document.write('bronze');
} else {
    document.write('no soup for you');
}