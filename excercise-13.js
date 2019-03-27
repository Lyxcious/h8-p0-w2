function xo(str) {
    var oTotal = str.match(/o/g).length;
    var xTotal = str.match(/x/g).length;
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