//Means code line by line execute hoga....matlab 1 baar men 1 hi function run karega.
//eg:- Vikram gone to cook the maggi, so first they will boil the Water, when boiling will complete then he will go to bring the maggi, after that he will boil the maggi, after boiling he will cut the vaggies, after this all the step they will go to bring the katchup from shop. so it will take lots of time....this is called synchronus.

const arr = [1, 4, 5, 6, 3];

function sumArray(arr) {
  var ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans + arr[i];
  }
}

sumArray(arr);

//above example is sync because its exceyte line by line.
