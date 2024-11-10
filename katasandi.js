
let buatKataSandi = (panjang) => {
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let kataSandi = '';

    for (let i = 0; i < panjang; i++) {
        const randomIndex = Math.floor(Math.random() * karakter.length);
        kataSandi += karakter[randomIndex];
    }

    return kataSandi;
}

module.exports = { buatKataSandi }
