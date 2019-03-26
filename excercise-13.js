function xo(str) {
    var oTotal = str.match(/o/g).length;
    var xTotal = str.match(/x/g).length;
    if (oTotal === xTotal){
        return true;
    } else {
        return false;
    }
  }
  
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));