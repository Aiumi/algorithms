function findLongestWord(str) {
  var words = str.split(" "); // split the string into separate words by splitting it at the spaces
  var longest = 0; // creates a variable "longest" set to the lowest possible word length to start (0)
  for (var i = 0; i < words.length; i++) { // a for loop runs through the entire string one word at a time
    if (words[i].length > longest) { // if the loop hits a word longer than what "longest" currently is, then...
      longest = words[i].length; // the word's length will replace that of "longest"
    }
  }
  return longest; // at the end, the longest word will be returned
}

findLongestWord(""); // enter the string here
