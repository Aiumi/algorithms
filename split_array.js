function chunk(arr, size) { // function takes 2 parameters: the array and the size each array should be after splitting it
 var newArr = []; // an empty array is stored in variable "newArr"
    for(var i = 0; i < arr.length; i += size) { /* a for loop starts at the first element of the array (index 0), runs until it reaches
                                                  the end of the array, and increments by i + size every time */
  	newArr.push(arr.slice(i, i + size)); // arr is sliced from i to i + size and pushed onto the newArr
    } 
  return newArr; // newArr is returned
 }

chunk(["a", "b", "c", "d"], 2); // enter the array and size here

/* ALTERNATIVE METHOD
function chunk(arr, num) { 
    var newArr = [];
    var i = 0;
    while(i < arr.length){
      newArr.push(arr.slice(i,i+num));
      i += num;    
    }
    return newArr;
  } */
