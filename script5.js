// Recursive Fibonacci

// Failed try
// const recursiveFibonacci = (n) => {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib[n];
//   // nThFibonacciNumber(fib, n);
// };

// // const nThFibonacciNumber = (array, n) => {
// //   const number = array[n];
// //   return number;
// // };
// console.log(recursiveFibonacci(10));

// Tutorial solution

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(6));