// First Way (remove the last item from array with pop())
var numbers = [
    1,
    2,
    3,
    4,
    5,
    6
];

numbers.pop();

// pop() also returns the last value so that it 
// can be stored like this:
var numbers = [
    1,
    2,
    3,
    4,
    5,
    6
];

var lastItem = numbers.pop(); // will store the value 6

// Second Way (remove the first item from array with shift())
var numbers = [
    1,
    2,
    3,
    4,
    5,
    6
];

numbers.shift();

// shift() also returns the first value so that it 
// can be stored like this:
var numbers = [
    1,
    2,
    3,
    4,
    5,
    6
];

var firstItem = numbers.shift(); // will store the value 1