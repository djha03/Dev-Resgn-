const dj = { "name": "divakar", "age": 23, "city": "Bangalore" };

// Convert object to JSON string
const jsonString = JSON.stringify(dj);
console.log(jsonString);  
// Output: {"name":"divakar","age":23,"city":"Bangalore"}

// JSON string to object
const stringToObj = JSON.parse(jsonString);
console.log(stringToObj);  
// Output: { name: 'divakar', age: 23, city: 'Bangalore' }
