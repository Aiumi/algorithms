function mutation(arr) {
  	var str = arr[0].toLowerCase().split("");
    var tgt = arr[1].toLowerCase().split("");
    for (var i = 0; i < tgt.length; i++) {
    	if((str.indexOf(tgt[i]) === -1)) return false ;
    }
    return true;
   } 

mutation(["hello", "hey"]);
