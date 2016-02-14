function destroyer(arr) { // the function takes in an array and any additional arguments. The arguments will be removed from arr
  var testArray = arguments[0]; // a variable called testArray stores the first argument 
  var toDestroy = []; // a variable called toDestroy stores an empty array
  var newArr = []; // a variable called newArr stores another empty array
  for(var i = 1; i < arguments.length; i++) { // a for loop goes through all the arguments, starting with the second one (index 1)
  	toDestroy.push(arguments[i]); // the arguments are pushed into the toDestroy array
  }
  testArray.filter(function(num) { // testArray is then filtered with a function that takes num as a parameter...
  	if(toDestroy.indexOf(num) === -1) newArr.push(num); /* this checks if num matches any elements that are NOT in toDestroy (index -1). 
  	                                                        These elements are then pushed into newArray. At the end, newArray will 
  	                                                        consist of elements from arr that do not match anything in the additional 
  	                                                        arguments */
  });
  return newArr; // newArr is returned
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3); // enter arr and the additional arguments here
