var hari = 23;
var bulan = 10;
var tahun = 1995;

if (bulan < 1 || bulan > 12 || typeof bulan !== "number") {
    console.log("Input bulan dengan antara 1-12");
} else if (tahun < 1900 || tahun > 2200) {
    console.log("Input tahun dengan antara 1900-2200");
} else {
    switch (bulan){
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari";
            break;
        case 3:
            bulan = "Maret";
            break;
        case 4:
            bulan = "April";
            break;
        case 5:
            bulan = "Mei";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "Desember";
            break;
    }
    console.log(hari + " " + bulan + " " + tahun);
}
