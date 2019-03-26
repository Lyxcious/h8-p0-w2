function konversiMenit(menit) {
    var menitTotal = Math.floor(menit/60);
    var detikTotal = menit % 60;
    return menitTotal + ":" + ("0" + detikTotal).substr(-2);
  }
  
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));