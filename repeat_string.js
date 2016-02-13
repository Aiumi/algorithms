function repeat(str, num) { // the function takes 2 parameters: a string and the number of times it should be repeated
  if (num < 0) { // this checks if the number is negative. If it is, then the function will just return a blank string
    return "";
  }
  var strRepeat = str.repeat(num); // creates a variable that stores the string repeated num times
  return strRepeat; // returns the repeated string
}

repeat("abc", 3); // enter the string and number of times it should be repeated here

/* ALTERNATIVE METHOD 
function repeat(str, num) {
  var strRepeat = ""; // creates a variable that starts with a blank string
  while(num > 0) { // a while loop that runs as long as num is larger than zero
    repeatStr += str; // str is added onto repeatStr each time
    num--; // num decreases by 1 each time, and the loop will stop once it reaches 1 since it can never drop to 0
  }
  return strRepeat; // returns the repeated string
} 

repeat("abc", 3); */
