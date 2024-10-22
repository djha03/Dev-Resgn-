
//callback function we use to pass as a parameter to other function means function ko as a parameter dusre function men pass karte hain.

//real life men-----for example bhai pehle exam ho jaye tbb to result aayega, to main 1 exam name ka function bana loonga aur usko bolunga bhai jbb exam end ho jaye tbb result function ko bula lena aur run karwa dena

function show(){
  console.log("Hello all");
}

function dj(cb){
  cb();
}

dj(show);
