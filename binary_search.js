const Example_1 = [0];
const Example_2 = [];
const Example_3 = [0, 2, 5, 13, 32, 45, 77, 999];
const Example_4 = [7, 10, 22, 27, 1314, 1998, 2000];
const Example_5 = [0, 18, 22, 66, 123, 3456, 8875, 9123, 123344];

const target = 22;

/**
 * For example, we have an array [0, 18, 22, 66, 123, 3456, 8875, 9123, 123344]
 * 1. Take middle index of the array, 4,which is 123 and compare it with the target
 * 2. If the target is less than 123, we will search the left side of the array
 * 2.1 The end point index will be the middle index - 1, which is [0, 18, 22, 66]
 * 3. If the target is greater than 123, we will search the right side of the array
 * 3.1 The start point index will be the middle index + 1, which is [3456, 8875, 9123, 123344]
 * repeat step 1, 2, 3 until we find the target
 */

const binary_search_Iteration = (arr, target) => {
  if (arr.length < 1) return -1;
  if (arr.length === 1 && arr[0] === target) {
    return 0;
  }
  let start = 0; // start index position
  let end = arr.length - 1; // end index position
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // middle index position
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const binary_search_Recursive = (arr, target, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binary_search_Recursive(arr, target, mid + 1, end);
  } else {
    return binary_search_Recursive(arr, target, start, mid - 1);
  }
};

// console.log("Example 1: ", binary_search_Iteration(Example_1, target));
// console.log("Example 2: ", binary_search_Iteration(Example_2, target));
// console.log("Example 3: ", binary_search_Iteration(Example_3, target));
// console.log("Example 4: ", binary_search_Iteration(Example_4, target));
// console.log("Example 5: ", binary_search_Iteration(Example_5, target));

// console.log(
//   "Example 1: ",
//   binary_search_Recursive(Example_1, target, 0, Example_1.length - 1)
// );
// console.log(
//   "Example 2: ",
//   binary_search_Recursive(Example_2, target, 0, Example_2.length - 1)
// );
// console.log(
//   "Example 3: ",
//   binary_search_Recursive(Example_3, target, 0, Example_3.length - 1)
// );
// console.log(
//   "Example 4: ",
//   binary_search_Recursive(Example_4, target, 0, Example_4.length - 1)
// );
// console.log(
//   "Example 5: ",
//   binary_search_Recursive(Example_5, target, 0, Example_5.length - 1)
// );
