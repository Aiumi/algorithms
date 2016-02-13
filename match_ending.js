function end(str, target) { // the function takes 2 parameters: a string and a target
  var targetLength = target.length; // creates a variable that stores the length of the target
  var subString = str.substring(str.length - targetLength, str.length); /* creates a variable that stores a substring that starts at
                                                                          (the string length minus the target length) and ends at 
                                                                          (the string length) */
  if (target === subString) { // this compares the original target and the substring that was created
    return true; // if they match, it returns true
  }
  return false; // otherwise, it returns false
  
}

end("Bastian is fine today", "today"); // enter the string and target here

/* str -> "Bastion is fine today"
target -> "today"
targetLength -> 5
str.length -> 21
subString -> str.substring(16, 5) -> "today"
return true */
