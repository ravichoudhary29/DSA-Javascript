// Power of 2.
//Problem: Give a positive integer 'n', determine if the number is a power of 2 or not?

// My attempt
// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   for (i = 1; i < n; i++) {
//     if (Math.log(n) === i * Math.log(2)) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(13));
// console.log(isPowerOfTwo(1024));

// // Tutorial solution

// const isPowerOfTwo1 = (n) =>{

// }

//Big-O: O(n)

// 1. Tutorial solution(while loop)

// const isPowerOfTwo1 = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (1 < n) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// };

// console.log(isPowerOfTwo1(8));
// console.log(isPowerOfTwo1(9));
// console.log(isPowerOfTwo1(1024));

// 2. Alternate solution

const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitwise(8));
console.log(isPowerOfTwoBitwise(9));
console.log(isPowerOfTwoBitwise(1024));
