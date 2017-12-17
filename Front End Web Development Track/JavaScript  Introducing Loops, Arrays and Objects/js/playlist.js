// First Method
// var playlist = [ 1, 2, 3, 4, 5, 6 ];
// playlist[ playlist.length ] = 7;

// Second Method
// var playlist = [ 1, 2, 3, 4, 5, 6 ];
// playlist.unshift( -2, -1, 0 );
// playlist.push( 7, 8, 9 );

// Third Method
//var playList = [];
//playList.push('I Did It My Way');
//playList.push('Respect', 'Imagine');
//playList.unshift('Born to Run');
//playList.unshift('Louie Louie', 'Maybellene');
//printList( playList );

var playList = [
    'I Did It My Way',
    'Respect',
    'Imagine',
    'Born to Run',
    'Louie Louie',
    'Maybellene'
];

function print( message ) {
    document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);