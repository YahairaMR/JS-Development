/*
Given an array
A peak is a number that is greater than both its immediate neighbors.
Return the first peak in the array. If none exists, return null.

Examples:
[1,3,2,4,1] => 3

[1,5,7,9,6,4,5,3] => 9

[1,2,3,4,5]  => null 

*/

const firstPeak = (array) => {
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      return array[i];
    }
  }

  return null;
};

console.log(firstPeak([1, 5, 7, 9, 6, 4, 5, 3]));
