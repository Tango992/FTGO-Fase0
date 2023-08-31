const karyawan = {
    nama: "Budi",
    posisi: "Back End Developer",
    gaji: 10000000,
    tampilDetail: function() {
        return `${this.nama} sebagai ${this.posisi} dengan gaji Rp. ${this.gaji.toLocaleString()}`
    }
};
// console.log(karyawan.tampilDetail())

const toTitleCase = (s) => {
    return `${s.slice(0,1).toUpperCase()}${s.slice(1)}`
}

let ul = document.getElementById("detailKaryawan");
for (let key in karyawan) {
    if (typeof karyawan[key] !== "function") {
        let li = document.createElement("li");
        li.textContent = `${toTitleCase(key)} : ${karyawan[key].toLocaleString()}`;
        ul.appendChild(li);
    }
}