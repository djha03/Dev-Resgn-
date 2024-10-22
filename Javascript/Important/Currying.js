

//• Currying is a method where a function return another function.

Eg-
                  

	//•                     Normal Function                    
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
 
	//•                   Curried Version
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}
console.log(curriedAdd(2)(3)); // Output: 5


// Real life analogy:-
// Jbb hum momos khane jate hain to shop wala 1/2 work pehle se hi kiya rehta hai jaise ki Momos boil and all………………….fir wo wait karta hai ki customer jbb aayega tbb jaldi se fry or ready karke de doonga this is currying.
                                                


let hasCustomerCame=false;  //abhi customer nhi aaya hai
function boilNoodles(){
  console.log("Boiling noodles");
}
function cookNoodles(){
  console.log("Cooking noodles");
}
                  
              //Currying
function curry(){
  boilNoodles();
  return function(){
    cookNoodles();
  }
}
const cookMyFood= curry();
setTimeout(function(){
  hasCustomerCame=true;
  cookMyFood();
}, 5000)







