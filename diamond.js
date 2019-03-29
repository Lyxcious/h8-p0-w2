var hasil = "";
var baris = 12;
if (baris % 2 == 1) {
    for (var i = 1; i <= baris; i++){
        asterix = "";
        if (i <= baris / 2){
            for (var j = 1; j <= i; j++){
                space = "";
                for (var k = baris/2+1; k >= i+1; k--){
                    space += " ";
                }
                if (j == 1){
                    asterix += "*";
                } else {
                    asterix += "**";
                }
            }
        } else {
            for (var j = baris; j >= i; j--){
                space = "";
                for (var k = baris/2+1; k <= i; k++){
                    space += " ";
                }
                if (j == baris){
                    asterix += "*";
                } else {
                    asterix += "**";
                }
            }
        }
        console.log(space + asterix)
    }
} else {
    for (var i = 1; i <= baris; i++){
        asterix = "";
        if (i <= baris / 2){
            for (var j = 1; j <= i; j++){
                space = "";
                for (var k = baris/2; k >= i+1; k--){
                    space += " ";
                }
                if (j == 1){
                    asterix += "*";
                } else {
                    asterix += "**";
                }
            }
        } else {
            for (var j = baris; j >= i; j--){
                space = "";
                for (var k = baris/2+2; k <= i; k++){
                    space += " ";
                }
                if (j == baris){
                    asterix += "*";
                } else {
                    asterix += "**";
                }
            }
        }
        console.log(space + asterix)
    }
}