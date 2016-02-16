function rot13(str) {
  //var splitStr = str.split(" ");
  var newStr = "";
  //   var newerStr = [];
  for (var i = 0; i < str.length; i++) {
    //convert letter to unicode
    var codeStr = str.charCodeAt(i);
    //conver unicode to letter an push into newStr array
    var regex = /[^A-Z]/g;

    if (str[i].match(regex)) newStr += str[i];
    else if ((codeStr - 13) < "A".charCodeAt()) {
      newStr += (String.fromCharCode(codeStr + 13));
    } else {
      newStr += (String.fromCharCode(codeStr - 13));
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
