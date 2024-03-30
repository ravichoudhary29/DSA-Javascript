// My solution
// const fibonacci = (n) => {
//   let fib = [];
//   if(n<=2){
//     if(n===1){
//       fib.push(0);
//     }
//     else{
//       fib.push(0,1);
//     }
//     return fib;
//   }
//   if(n>2){
//     fib=[0,1];
//     for(i=2; i<n; i++){
//       fib.push(fib[i-1] + fib[i-2]);
//     }
//     return fib;
//   }
// }

// console.log(fibonacci(5));

// Tutorial solution

const fibonacci1 = (n) =>{
  const fib = [0,1];
  for(i=2 ; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}

console.log(fibonacci1(2));
console.log(fibonacci1(5));
console.log(fibonacci1(6));