var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};


// For In Loop that accesses the property names
// of the object person
//for ( var propertyNames in person ) {
//    console.log(propertyNames);
//}

// For In Loop that accesses the values inside
// the properties of the object person
//for( var values in student ) {
//    console.log(student[values]);
//}

for( prop in person) {
    console.log(prop, ': ', person[prop]);
}