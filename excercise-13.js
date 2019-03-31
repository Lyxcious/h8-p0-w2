function xo(str) {
    var oTotal = 0;
    var xTotal = 0;
    for (var i = 0; i <= str.length-1; i++){
        if (str.charAt(i) == "o"){
            oTotal++;
        } else if (str.charAt(i) == "x") {
            xTotal++;
        }
    }
    if (oTotal === xTotal){
        return true;
    } else {
        return false;
    }
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true