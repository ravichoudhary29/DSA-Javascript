// Linear search

// Tutorial solution

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([-5, 6, 50, 4, 5], 6));
console.log(linearSearch([-5, 6, 50, 4, 5], 4));
console.log(linearSearch([-5, 6, 50, 4, 5], 10));
