// Recursive Binary Search

const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (target > arr[middleIndex]) {
    leftIndex = middleIndex + 1;
    return search(arr, target, leftIndex, rightIndex);
  } else {
    rightIndex = middleIndex - 1;
    return search(arr, target, leftIndex, rightIndex);
  }
};

console.log(recursiveBinarySearch([-5, 6, 8, 12, 20], 8)); // Output: 2
console.log(recursiveBinarySearch([-5, 6, 8, 12, 20], 20)); // Output: 4
console.log(recursiveBinarySearch([-5, 6, 8, 12, 20], -15)); // Output: -1
