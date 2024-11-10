
let { tambah, kurang, kali, bagi } = require("./modules/kalkulator.js")
let { luasPersegi, luasPersegiPanjang, luasLingkaran } = require("./modules/menghitungLuas.js")
let { hitungKecepatan, hitungPercepatan, hitungGaya, hitungEnergiKinetik } = require("./modules/fisika.js")
let { buatKataSandi } = require("./modules/kataSandi.js")

// Dari file kalkulator.js
console.log('=== Dari file kalkulator.js');
let angka_1 = 10
let angka_2 = 2
console.log(`hasil dari ${angka_1} + ${angka_2} = ${tambah(angka_1, angka_2)}`);
console.log(`hasil dari ${angka_1} - ${angka_2} = ${kurang(angka_1, angka_2)}`);
console.log(`hasil dari ${angka_1} * ${angka_2} = ${kali(angka_1, angka_2)}`);
console.log(`hasil dari ${angka_1} / ${angka_2} = ${bagi(angka_1, angka_2)}`);

// Dari file menghitungLuas.js
console.log('\n=== Dari file menghitungLuas.js');
console.log('Luas persegi', luasPersegi(5));
console.log('Luas persegi panjang', luasPersegiPanjang(7, 9));
console.log('Luas lingkaran', luasLingkaran(8));

// Dari file fisika.js
console.log('\n=== Dari file fisika.js');
let jarak = 100;  // meter
let waktu = 10;   // detik
let kecepatan = hitungKecepatan(jarak, waktu);
console.log("Kecepatan: " + kecepatan + " m/s");

let vAwal = 0;     // m/s
let vAkhir = 20;   // m/s
let percepatan = hitungPercepatan(vAwal, vAkhir, waktu);
console.log("Percepatan: " + percepatan + " m/s²");

let massa = 10;    // kg
let gaya = hitungGaya(massa, percepatan);
console.log("Gaya: " + gaya + " N");

let energiKinetik = hitungEnergiKinetik(massa, kecepatan);
console.log("Energi Kinetik: " + energiKinetik + " J");

// Dari file kataSandi.js
console.log('\n=== Dari file kataSandi.js');
let panjang_sandi = 10
console.log("Kata sandi acak:", buatKataSandi(panjang_sandi), "\n");
