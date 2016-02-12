function titleCase(str) {
  return str.replace(/\w\S*/g, function(word) { // na
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); /* this changes the first character of each word (index 0) into 
                                                                          a capital and then adds on the rest of the word (the substring
                                                                          starting at the second character of the word (index 1)), which 
                                                                          has been changed to lowercase */
  });
}

titleCase(""); // enter the string here
