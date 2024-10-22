

// • Closure is a concept where an inner function has access to variables from its outer (enclosing) function, even after the outer function has finished executing.

// •  Ek hi cheej samjho closure tbb banta hai jbb function ke under function decleare karte hain.
// • Hum esko specially encapsulation ke liye use karte hain.

EX-1

function getPassingStatus(){
    let marks=30
    let dj="Stuburn";                    
    
    return innerfunction(){ 
        return marks>=28;    //yahan ye function check variable ko user ya developer ko pata nhi ki main function men aur kya sbb store hai jaise dj variable and all usko sirf innner Function return kiya uska information usko milega
    }
}

let dj=getPassingStatus();
console.log(dj());  //true

EX-2

function outerFunction() {
    let outerVariable = "I'm from outerFunction!";

    function innerFunction() {
        console.log(outerVariable);          // The inner function can access the outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();       // outerFunction is done executing
myClosure();               // "I'm from outerFunction!" gets logged because the innerFunction remembers the outerVariable


// Real-Life Analogy:
// Imagine you're at a party (outer function), and you leave the party, but you still remember the people (variables) you met there. Even though the party is over, the memory of those people stays with you (this is what the inner function does—it remembers variables even after the outer function ends).




