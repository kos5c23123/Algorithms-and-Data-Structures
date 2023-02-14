const Example_1 = [0];
const Example_2 = [];
const Example_3 = [32, 45, 77, 999, 13, 0, 5, 2];
const Example_4 = [7, 27, 10, 22, 1998, 2000, 1314];

/**
 * For Example, we have an array [32, 45, 77, 999, 13, 0, 5, 2]
 * 1. [32, 45, 77, 999] [13, 0, 5, 2]
 * 2. [32, 45] [77, 999] [13, 0] [5, 2]
 * 3. [32] [45] [77] [999] [13] [0] [5] [2]
 * 4. [32, 45] [77, 999] [0, 13] [2, 5]
 * 5. [32, 45, 77, 999] [0, 2, 5, 13]
 * 6. [0, 2, 5, 13, 32, 45, 77, 999]
 */


const merge_shot = (arr) => {
  if (arr.length <= 1) return arr; // return array if array length is equal to 0 or 1

  const [left, right] = split(arr); 
  const left_sorted = merge_shot(left);
  const right_sorted = merge_shot(right);

  return merge(left_sorted, right_sorted);
};

const split = (arr) => {
  const mid = Math.floor(arr.length / 2); // get the middle index of the array
  const left = arr.splice(0, mid); // get the left side of the array
  const right = [...arr]; // get the right side of the array and clone arr to right
  return [left, right];
};

const merge = (left, right) => {
  const newArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) { // if left and right array have elements
    if (left[i] < right[j]) {
      newArray.push(left[i]);
      i++;
    } else {
      newArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    newArray.push(left[i]);
    i++;
  }
  while (j < right.length) {
    newArray.push(right[j]);
    j++
  }
  return newArray;
};

console.log("Example 1: ", merge_shot(Example_1));
console.log("Example 2: ", merge_shot(Example_2));
console.log("Example 3: ", merge_shot(Example_3));
console.log("Example 4: ", merge_shot(Example_4));
