function where(arr, num) { // the function takes 2 parameters: an array and a number to find the correct index of within the sorted array
  arr.push(num); // the number is first pushed onto arr
  var toSort = arr.sort( // a variable toSort is created where...
    function compare(a,b) { // a function sorts arr's elements (including num) from smallest to largest
	return a - b; 
  });
  return toSort.indexOf(num); // the index of num is then returned
}

where([-1, 100, 200 , 20, 10, 50, 30, 40], 55); // enter arr and num here
