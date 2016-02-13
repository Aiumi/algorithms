function largestOfFour(arr) {
  var largestNumbers = [];  // creates a variable that stores an empty array 
  for (var i = 0; i < arr.length; i++) { // a for loop runs through each subarray in the entire array
    var largest = arr[i][0]; // creates a variable that stores the first number in the array the loop is currently on
    for (var j = 0; j < arr[i].length; j++) { // another for loop runs through each number in the current subarray the 1st for loop is on
      if (largest < arr[i][j]) { // checks if the current number is larger than "larger". If it is, then...
        largest = arr[i][j]; // the current number will be set as the new "largest"
      }
    }
    largestNumbers.push(largest); /* at the end of the 2nd for loop when it's done running through a subarray, the largest number is 
                                    pushed onto the empty array "largestNumbers" */
  }
  return largestNumbers; // once the entire array and all its subarrays have been looped through, the array "largestNumbers" is returned
}

largestOfFour(""); // enter the arrays of numbers here
 /* arr -> [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
largestNumbers -> [] -> [5] -> [5, 27];
i -> 0 -> 1 -> 2;
largest -> 4 -> 5 -> 13 -> 27;
j -> 0 -> 1 -> 2 -> 3 -> 4 -> 0 -> 1 -> 2 -> 3 -> 4; */

