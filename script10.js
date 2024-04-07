// Bubble Sort

// Own solution

// const bubbleSort = (arr) => {
//   let temp1;
//   let temp2;
//   for (let i = 1; i <= arr.length; i++) {
//     let j = i;
//     if (arr[j] < arr[j - 1]) {
//       temp1 = arr[j];
//       temp2 = arr[j - 1];
//       arr[j - 1] = temp1;
//       arr[j] = temp2;
//     }
//   }
// };

// console.log(bubbleSort([-2, 6, 20, -10, -2, 8]));

// Tutorial solution

const bubbleSort = (arr) => {
  let temp;
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

console.log(bubbleSort([-2, -6, 56, -81, -20]));
//Outputs: [-81, -20, -6, -2, 56]
//Big-O => O(n^2)
