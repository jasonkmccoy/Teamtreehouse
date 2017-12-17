// join() array method
var daysInWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var daysString = daysInWeek.join(': ');

console.log( daysString );

// concat() array method
var currentStudents = [
    'Joan',
    'John',
    'Joaquin'
];

var newStudents = [
    'Samantha',
    'Traci',
    'Tiago'
];

var allStudents = currentStudents.concat( newStudents );
console.log( allStudents );

// indexOf() array method
var fruit = [
    'Apple',
    'Orange',
    'Grapefruit'
];

var position = fruit.indexOf('Apple');
console.log(position);