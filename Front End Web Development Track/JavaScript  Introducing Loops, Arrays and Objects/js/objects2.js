var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// First way to access the name property
// alert(person['name']);

// Second way to access the name property
// Easier and more common way to access
// Use this method
alert(person.name);

// To change the value inside of name property
person.name = 'Bobby';
alert(person.name);

// To create a new property
person.phoneNumber = 5556789876;
alert(person.phoneNumber);

// Use the function that prints HTML to the page
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

// Create a variable containing the message that tells
// us values of certain properties of the object
var message = '<p>Hello, My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';

// Print the properties message to the page
print(message);
