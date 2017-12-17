$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

// Stage 3 Challenge
//  1. Add a second $.getJSON() method
//
//  2. The URL for the JSON data is ../data/rooms.json
//
//  3. Finished HTML for the rooms widget will look like this:
//
//    <ul class="rooms">
//        <li class="full">101</li>
//        <li class="empty">102</li>
//        <li class="full">103</li>
//        <li class="full">104</li>
//        <li class="empty">105</li>
//        <li class="empty">106</li>
//    </ul>
//    
//  4. The complete HTML goes inside a div with the ID of roomList
  
  $.getJSON('../data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
}); // end ready