function largestOfFour(arr) {
  var largestNumbers = [];  
  for (var i = 0; i < arr.length; i++) {
    var largest = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      if (largest < arr[i][j]) {
        largest = arr[i][j];
      }
    }
    largestNumbers.push(largest);
  }
  return largestNumbers;
}
 /* arr -> [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
largestNumbers -> [] -> [5] -> [5, 27];
i -> 0 -> 1 -> 2;
largest -> 4 -> 5 -> 13 -> 27;
j -> 0 -> 1 -> 2 -> 3 -> 4 -> 0 -> 1 -> 2 -> 3 -> 4; */
largestOfFour("");
