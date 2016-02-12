function reverseString(str) {
  var j = ""; // start with a blank string stored in a variable
  for (var i = str.length - 1; i >= 0; i--) /* the for loops starts with the last character in the string, runs until it is no longer 
                                              greater than or equal to the first character, and decrements by 1 character each time. */
    j += str[i]; // each character run through by the loop is then added onto the created variable
  return j; // the reversed string is returned at the end
}

reverseString(); // enter the string you would like to reverse here.
