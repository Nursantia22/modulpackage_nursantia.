
let hitungKecepatan = (jarak, waktu) => {
    return jarak / waktu
}

let hitungPercepatan = (vAwal, vAkhir, waktu) => {
    return (vAkhir - vAwal) / waktu;
}

let hitungGaya = (massa, percepatan) => {
    return massa * percepatan;
}

let hitungEnergiKinetik = (massa, kecepatan) => {
    return 0.5 * massa * kecepatan * kecepatan;
}

module.exports = { hitungKecepatan, hitungPercepatan, hitungGaya, hitungEnergiKinetik }
