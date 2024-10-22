


// An IIFE (pronounced "iffy") is a function in JavaScript that runs as soon as it is defined. It is a function expression that is executed immediately after it is created.

EG:-

(function() {
  // function body
})();    () eska matlab ye hua ki jaldi execute krr do esko.


// Real life ex-
// Think of an IIFE like a pop-up shop that opens just for a day to sell products. Once the shop closes, the products are no longer available. The shop opens, sells its items, and then closes forever, without leaving anything behind. Similarly, an IIFE runs once, does its job, and leaves no trace in the global scope.

(function() {
  let message = "Hello, IIFE!";
  console.log(message); // "Hello, IIFE!"
})();
console.log(message); // Uncaught ReferenceError: message is not defined









