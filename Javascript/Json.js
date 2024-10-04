
//Json object
const person={
  name:"divakar",
  age:23,
  city:"Bangalore",
}

console.log(person)

//convert to JSON(string)
const objToString=JSON.stringify(person);
console.log(objToString);



const dj='{"name":"divakar","age":23,"city":"Bangalore"}'  //Json string

//JSON to object
const stringToObj=JSON.parse(dj);
console.log(stringToObj);


