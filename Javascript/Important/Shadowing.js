// "shadowing" occurs when a variable in a local scope has the same name as a variable in an outer scope. When this happens, the local variable "shadows" or "hides" the outer variable, meaning that the local variable takes precedence within its scope. The outer variable becomes inaccessible because the local one is used instead.


var a = 20; // Global scope

function foo() {
  var a = 10; // Local scope (shadows the global 'a')
  console.log(a);
}

foo(); // Output: 10

