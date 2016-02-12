function titleCase(str) {
  return str.replace(/\w\S*/g, function(word) { /* The "/" starts a regular expression. "\w" looks for all word characters in the string.
                                                  "\S" looks for all non-whitespace characters. "*" is a quantifier that matches any
                                                  string with "n" zero or more times, where "n" is the metacharacter in the regular
                                                  expression. "/g" performs a global match that looks for all instances. All matches 
                                                  will be replaced through the function that takes "word" as a paramater */
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); /* this changes the first character of each word (index 0) into 
                                                                          a capital and then adds on the rest of the word (the substring
                                                                          starting at the second character of the word (index 1)), which 
                                                                          has been changed to lowercase */
  });
}

titleCase(""); // enter the string here
