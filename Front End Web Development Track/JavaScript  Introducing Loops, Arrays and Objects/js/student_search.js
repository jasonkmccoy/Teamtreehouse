var message = '';
var student;
var search;

// Track is (iOS, Web Design, Front End Development, etc)
// Achievements (should hold a number value)
// Points (holds the number of points student has earned)
var students = [
    {
        name: 'Jason',
        track: 'Front End Development',
        achievements: '5',
        points: '2500'
    },
    {
        name: 'Julia',
        track: 'iOS',
        achievements: '8',
        points: '4500'
    },
    {
        name: 'Hannah',
        track: 'Web Design',
        achievements: '10',
        points: '8500'
    },
    {
        name: 'Eric',
        track: 'JavaScript',
        achievements: '15',
        points: '25500'
    },
    {
        name: 'Anne',
        track: 'Database',
        achievements: '45',
        points: '222500'
    }
];


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
    }
  }
}
