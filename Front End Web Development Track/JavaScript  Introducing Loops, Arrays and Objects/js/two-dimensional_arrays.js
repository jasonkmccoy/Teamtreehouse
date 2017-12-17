// Simple Two-Dimensional Array
var grades = [
    [80, 90, 100, 95],
    [75, 95, 85, 100],
    [60, 80, 77, 90]
];

console.log(grades[2][0]);


// My Music Playlist with Song and Artist App
var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['Louie Louie', 'The Kingsmen'],
    ['Maybellene', 'Chuck Berry']
];

function print( message ) {
    document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for (var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);