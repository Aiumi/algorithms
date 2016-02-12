function factorialize(num) {
  if (num === 0) { // Checks to see if num is 0; if it is, it returns 1 because 0! is 1
    return 1;
  } else { // If num is not 0, then...
      return num * factorial(num - 1); // num is multiplied by the factorial of num - 1 to continue the function
      }
}

factorialize(); // enter num here
