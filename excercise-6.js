//1. Melakukan Looping Menggunakan While
var number1 = 2;

console.log("LOOPING PERTAMA");
while (number1 < 21){
    console.log(number1 + " - I love coding");
    number1 += 2;
}

var number2 = 20;

console.log("LOOPING KEDUA");
while (number2 > 1){
    console.log(number2 + " - I will become fullstack developer");
    number2 -= 2;
}

//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA")
for (var number3 = 1; number3 < 21; number3 ++){
    console.log(number3 + " - I love coding");
}

console.log("LOOPING KEDUA")
for (var number4 = 20; number4 > 0; number4 --){
    console.log(number4 + " - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap
for (var ulang1 = 1; ulang1 < 101; ulang1 ++){
    if(ulang1 % 2 === 0){
        console.log(ulang1 + " - GENAP");
    } else {
        console.log(ulang1 + " - GANJIL");
    }
}

for (var ulang2 = 1; ulang2 < 101; ulang2 += 2){
    if (ulang2 % 3 === 0){
        console.log(ulang2 + " - KELIPATAN 3");
    } else {
        console.log();
    }
}

for (var ulang3 = 1; ulang3 < 101; ulang3 += 5){
    if (ulang3 % 6 === 0){
        console.log(ulang3 + " - KELIPATAN 6");
    } else {
        console.log();
    }
}

for (var ulang4 = 1; ulang4 < 101; ulang4 += 9){
    if (ulang4 % 10 === 0){
        console.log(ulang4 + " - KELIPATAN 10");
    } else {
        console.log();
    }
}