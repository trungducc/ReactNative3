'use strict'

function indexOf(element, array, originalLength) {
  return array.length == 0 ? -originalLength - 1 : element == array[0] ? 0 : indexOf(element, array.slice(1, array.length), originalLength) + 1;
}

function binarySearch(input, target) {
  return indexOf(target, input, input.length);  // Remove this line and change to your own algorithm
}

var a = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(a, 7));

module.exports = binarySearch