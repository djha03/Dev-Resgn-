

//Destructuring means simple 1 variable, object sbb se dusre variable object or container men copy karke value assign krr deta hai.


//1) Swap value of two varibale
 ex-1
let x=8;
let y=10;

[x,y]=[y,x]

console.log(x);


ex-2
let originalArray = [1, 2, 3];
let [a, b, c] = originalArray;

console.log(a, b, c); // Output: 1 2 3
console.log(originalArray); // Output: [1, 2, 3]

//using spred oprator

let originalArray = [1, 2, 3, 4, 5];

// Using the spread operator to copy values into a new array
let newArray = [...originalArray];

console.log(newArray);        // Output: [1, 2, 3, 4, 5]
console.log(originalArray);   // Output: [1, 2, 3, 4, 5]

let divakar={
  name:"divakar",
  age:25
}

let dj={...divakar}
console.log(dj);