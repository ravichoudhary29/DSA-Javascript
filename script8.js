// Binary Search
// [-5, 2, 4, 6, 10] target = 10, index = 4, target = -5, index = 0;

// Solution from Tutorial

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(binarySearch([-5, 2, 4, 6, 10], -5)); // Output: 0
console.log(binarySearch([-5, 2, 4, 6, 10], 6));  // Output: 3
