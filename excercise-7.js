//1. Menyusun Barisan Bintang
var row1 = 5;
var baris = 0;
while (baris < row1){
    console.log("*");
    baris += 1;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5;
var baris = 0;
while (baris < row2){
    bintang1 = "*";
    baris += 1;
    var kolom = 1;
    while (kolom < row2){
        bintang1 = bintang1 + "*";
        kolom += 1;
    }
    console.log(bintang1);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
var baris = 0;
while (baris < row3){
    bintang2 = "*";
    baris += 1;
    var kolom = 1;
    while (kolom < i){
        bintang2 = bintang2 + "*";
        kolom += 1;
    }
    console.log(bintang2);
}
