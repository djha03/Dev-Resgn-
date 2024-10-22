//Means code line by line execute nhi hoga....matlab 1 baar men multiple function run karega.
//eg:- Vikram gone to cook the maggi, so first they will boil the Water, and till the time water is boiling he will go to bring the maggi, will cut all the vaggies, kisko bolega jao katchup leke aao tbb tkk................so multiple task happening in one time, he is not waiting to complete the fiest task so it is called async



function findSum(n){
  let ans=0;
  for(let i=0; i<n; i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

setTimeout(findSumTill100, 2000);
console.log("hello thor");




