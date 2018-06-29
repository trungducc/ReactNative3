'use strict'

function indexOf(element, array, originalLength) {
  return array.length == 0 ? -originalLength - 1 : element == array[0] ? 0 : indexOf(element, array.slice(1, array.length), originalLength) + 1;
}

function binarySearch(input, target) {
  return indexOf(target, input, input.length);  // Remove this line and change to your own algorithm
}

module.exports = binarySearch