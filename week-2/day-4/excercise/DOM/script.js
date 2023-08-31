// Cara 1: Literal Object
const mobil = {
    merk: "Toyota",
    model: "Corolla",
    tahun: 2020,
    start: function() {
        return "Mesin dinyalakan";
    },
    getMobilInfo: function() {
        return `Mobil ini adalah ${this.merk} ${this.model} tahun ${this.tahun}.`;
    },
}
document.getElementById("infoMobil").innerText = mobil.getMobilInfo()

// Cara 2: Constructor Function
// function manusia(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
// }

// let Budi = new manusia("Budi", 25)
// let Daniel = new manusia("Daniel", 22)
// console.log(Daniel)

// Cara akses objek 
// // 1. Notation

// console.log(mobil.merk);
// mobil.start();

// // 2. Bracket Notation
// console.log(mobil["tahun"])

const Buku = {
    judul: "Intro to Programming",
    penulis: "John Doe",
    tahunTerbit: 2005,
};

document.getElementById("judulBuku").innerText = "Judul: " + Buku.judul;
document.getElementById("penulisBuku").innerText = "Penulis: " + Buku.penulis;
document.getElementById("tahunTerbit").innerText = "Tahun terbit: " + Buku.tahunTerbit;

