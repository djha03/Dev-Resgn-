
//The constructor function is automatically called when you create an object using the new keyword. If you used another function name, you would have to call it manually.....constructor means 

class Car{
  constructor(name, color, modelNo){
    this.name=name;
    this.color=color;
    this.modelNo=modelNo
  }
}

let BMW=new Car("BMW", "blue", 2873)
console.log(BMW.color)


//static keyword
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// You can call the static method directly on the class:
console.log(Calculator.add(5, 10));  // Output: 15

// You cannot call it on an instance of the class:
let calc = new Calculator();
console.log(calc.add(5, 10));  // Error: calc.add is not a function




var divakar={
  "name": "divakar",
  "age": 25,
  "city": "bangalore",
 }
//print all keys 
 console.log(Object.keys(divakar));

 //print all the values
 console.log(Object.values(divakar));















