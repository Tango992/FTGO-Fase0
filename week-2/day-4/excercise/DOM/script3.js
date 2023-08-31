function Karyawan(nama, posisi, gaji){
    this.nama = nama;
    this.posisi = posisi;
    this.gaji = gaji;
    this.tampilkanDetail = function() {
        return `${this.nama} sebagai ${this.posisi} dengan gaji Rp. ${this.gaji.toLocaleString()}`
    }
}

// method tampilkanDetail dapat dipisah seperti di bawah ini:
// Karyawan.prototype.tampilkanDetail = function() {
//     return `${this.nama} sebagai ${this.posisi} dengan gaji Rp. ${this.gaji.toLocaleString()}`
// }

let Budi = new Karyawan("Budi", "Back End Dev", 10000000)
console.log(Budi.tampilkanDetail())

let daftarKaryawan = [];

function tambahKaryawan() {
    for (argument of arguments) {
        daftarKaryawan.push(argument);
    }
};

function tampilkanKaryawanDiHTML() {
    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}

function hapusKaryawan(nama) {
    const index = daftarKaryawan.findIndex(key => key.nama === nama);
    if (index !== -1) {
        daftarKaryawan.splice(index, 1);
    };
}

function cariKaryawan(teks) {
    return daftarKaryawan.filter(key => key.nama.includes(teks) || key.posisi.includes(teks));
}

document.getElementById("form-karyawan").addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('input-nama').value;
    const posisi = document.getElementById('input-posisi').value;
    const gaji = parseInt(document.getElementById('input-gaji').value);

    const karyawan = new Karyawan(nama, posisi, gaji);
    tambahKaryawan(karyawan);
    tampilkanKaryawanDiHTML();

    // Add event kosongkan form
    document.getElementById('input-nama').value = "";
    document.getElementById('input-posisi').value = "";
    document.getElementById('input-gaji').value = "";
})

function hapusTerpilih() {
    const nama = document.getElementById("input-nama").value;
    hapusKaryawan(nama);
    tampilkanKaryawanDiHTML();
}

function cariDanTampilkan() {
    const teks = document.getElementById("input-cari").value;
    const hasil = cariKaryawan(teks);
    const ulElement = document.getElementById("daftar-karyawan-2");
    ulElement.innerHTML = "";

    if (teks.length > 0) {
        hasil.forEach(karyawan => {
            const liElement = document.createElement("li");
            liElement.textContent = karyawan.tampilkanDetail();
            ulElement.appendChild(liElement);
        })
    }

}

const karyawan1 = new Karyawan("Budi", "Programmer", 10000000);
const karyawan2 = new Karyawan("Rina", "Staff", 5000000)

tambahKaryawan(karyawan1, karyawan2);
tampilkanKaryawanDiHTML();

// tambahan fitur: menghapus karyawan
// tambahan fitur2 : fitur pencarian
// tambahan fitur 3: form html 