const Example_1 = [0];
const Example_2 = [];
const Example_3 = [32, 45, 77, 999, 13, 0, 5, 2];
const Example_4 = [7, 27, 10, 22, 1998, 2000, 1314];

const selection_sort = (arr) => {
  if (arr.length <= 1) return arr;

  let newArray = [];
  while (arr.length >= 1) { // if left and right array have elements
    let current = arr[0]; // get the first element of the array
    for (let i = 0; i < arr.length - 1; i++) { // compare the first element with the rest of the array
      if (current >= arr[i + 1]) { // if the first element is greater than the next element
        current = arr[i + 1]; // set the next element as the current element
      }
    }
    newArray.push(current); // push the current element to the new array
    const index = arr.indexOf(current); // get the index of the current element
    arr.splice(index, 1); // remove the current element from the array
  }
  return newArray;
};

console.log("Example 1: ", selection_sort(Example_1));
console.log("Example 2: ", selection_sort(Example_2));
console.log("Example 3: ", selection_sort(Example_3));
console.log("Example 4: ", selection_sort(Example_4));
