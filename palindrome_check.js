function palindrome(str) {
  var replaceChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase(); /* removes all non-alphanumeric characters and spaces, then makes
                                                                    the string lowercase */
  var reverseStr = replaceChar.split("").reverse().join(""); // splits each character in replaceChar, reverses the order, and joins them
  if (replaceChar === reverseStr) { // checks if reverseStr is identical to replaceChar after being reversed
    return true; // returns true if so
  } else {
    return false; // otherwise returns false
  }
}

palindrome(); // enter the string here
