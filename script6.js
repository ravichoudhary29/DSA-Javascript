// Recursive Factorial

// const recursiveFactorial = (n) => {
//   if (n < 1) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// };

// console.log(recursiveFactorial(0));

// Tutorial solution

const recursiveFactorial1 = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial1(n - 1);
};

console.log(recursiveFactorial1(0));
console.log(recursiveFactorial1(2));
console.log(recursiveFactorial1(1));

// Big-o --> O(n)
