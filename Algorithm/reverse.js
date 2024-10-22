
function reverse(numbers) {
  var n = numbers.length;
  let s=0;
  let e=n-1; 
  while(s<e){
    var temp=numbers[s];
    numbers[s]=numbers[e];
    numbers[e]=temp;
    s++;
    e--;
  }

  return numbers;
}

let numbers = "divakar";
var result = reverse(numbers);
console.log(result);
