// Prime Number

// My attempt
// const isPrime = (n) => {
//   let factors = 0;
//   for (i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       factors = factors + 1;
//     }
//   }
//   return factors > 2 ? `${n}: Not prime number` : `${n}: Prime number`;
// };

// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(15));

// Solution tutorial

const isPrime1 = (n) => {
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime1(5));
console.log(isPrime1(13));
console.log(isPrime1(91));

