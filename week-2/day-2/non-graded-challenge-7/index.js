// Conditional: Bandingkan Angka
let angka1 = 5;
let angka2 = 3;
let hasil = -1;

if (angka1 > angka2) {
    hasil = true;
} else if (angka1 < angka2) {
    hasil = false;
} else {
    hasil = -1;
}

console.log(hasil);

// Conditional: Graduates
let nama = "Daniel";
let nilai = 71;
let absen = 3;
let keterangan;

if (nilai > 70 && absen < 5) {
    keterangan = "lulus";
} else {
    keterangan = "tidak lulus";
}

console.log(keterangan);

// Conditional: Konversi Menit
let detik = 61

if (detik > 60) {
    detikConverted = detik % 60;
    let menit = Math.floor(detik / 60);
    console.log(`${menit}:${(detikConverted.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))}`);
} else {
    detikConverted = detik % 60;
    let menit = 0;
    console.log(`${menit}:${detikConverted}`);
}

// Conditional: Gacha
let gacha = Math.ceil(Math.random() * 5);
let kupon = 0;

switch(gacha) {
    case 1:
        console.log("Coba lagi ya");
        break;
    case 2:
        kupon = 5;
        console.log("Selamat kamu mendapatkan kupon sebanyak 5");
        break;
    case 3:
        kupon = 15;
        console.log("Selamat kamu mendapatkan kupon sebanyak 15");
        break;
    case 4:
        kupon = 50;
        console.log("Selamat kamu mendapatkan kupon sebanyak 50");
        break;
    case 5:
        kupon = 100;
        console.log("WOW, kamu menang jackpot! Selamat!!");
        break;
}