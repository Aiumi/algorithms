function truncate(str, num) {
		if(str.length <= num) return str;  
  	else { 
      if (num > 3) return str.slice(0, num - 3) + "...";
			else if (num <= 3) return str.slice(0, num) + "..."; 
    } 
	} 
  

truncate("A-", 11);
