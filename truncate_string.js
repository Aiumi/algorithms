function truncate(str, num) { /* the function takes 2 parameters: a string and a maximum string length (num). If str is longer than num,
				then str should be truncated to the maximum string length. str should end with "...", which is included
				in str's length */
   if(str.length <= num) return str; // an if statement returns the string if the length of str is less than or equal to num
      else { 
         if (num > 3) return str.slice(0, num - 3) + "..."; /* if num is greater than 3, then str is sliced from its first character up 
         							to num - 3 (to account for the "..." ending), and "..." is added */
	 else if (num <= 3) return str.slice(0, num) + "..."; /* if num is less than or equal to 3, then str is sliced from its first
	 							character up to num (the length of "..." is not accounted for in this
	 							case), and "..." is added */
      } 
} 
  

truncate("A boy trying to learn how to code is struggling with algorithms", 11); // enter the string and num here
