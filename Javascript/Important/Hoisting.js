// · Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.

                    //1) VAR
// • When you declare a variable using var, the declaration is hoisted to the top of its scope. However, the initialization (assignment of a value) is not hoisted.
console.log(x); // Output: undefined
var x = 5;

// 2) let and const:
// Hoisting works differently with let and const if we compare to the var. They are also hoisted, but they are not initialized during the hoisting phase. This creates a "Temporal Dead Zone" (TDZ), meaning you cannot access these variables until they are declared and initialized.

console.log(x); // Output: undefined  
Console.log(a)
let a=7;  //refrese error
const x = 5;


// Note- var jo hai wo intialize hoga means memory allocation hoga, but let const men kuch nhi hoga aisa jiske wajah se refrece error de dega.

// 3) FUNCTION HOISTING
// When you declare a function using the function keyword, the entire function declaration is hoisted to the top of its scope.

sayHello(); // Output: Hello, World!

function sayHello() {
  console.log("Hello, World!");
}

// Note- function memory bhi allocate karega and value bhi uska run hoga.

// • SUMMARY
// 1) Variable ke decleration top men move hote hain.
// 2) Function ki body move hoti hai.
// 3) Function ki priority jyada hoti hai => function pehle find and allocate hote hain.


// • Benefits of Hoisting:
// 1) Code Organization: Hoisting allows you to organize your code in a more readable manner by placing function declarations at the bottom of the file while still being able to use them anywhere in the code.
// 2) Flexibility: Hoisting provides some flexibility in how you structure your code.

