function factorialize(num) {
  if (num === 0) { // Checks to see if num is 0; if it is, it returns 1 because 0! is 1
    return 1;
  } else { // If num is not 0, then...
      product = 1; // We create a variable product and set it to 1
      for (var i = 1; i <= num; i++) { /* a for loop will start at 1 and run as long as it is less than or equal to num, incrementing
                                        up by 1 each time. */
        product *= i; // product will be multiplied by i and set as the new product each time
      }
    }
  return product; // product is then returned
  
}

factorialize(); // enter num here
