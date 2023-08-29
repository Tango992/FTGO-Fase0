// Tipe data number
let angka = 80;

// Tipe data string
let kalimat = "Selamat datang di FTGO RMT 002";

// Array
var coding = ["JavaScript", "GoLang", "Java"]

// Object
var student = {
    nama : "wijaya",
    kelas : "rmt002",
    program : "FTGO",
    batch : 2,
};

// document.getElementById("hasil").innerHTML = typeof(angka);
// document.getElementById("hasil").innerHTML = kalimat;
// document.getElementById("hasil").innerHTML = coding[1];
document.getElementById("hasil").innerHTML = student.nama + " mengikuti kelas " + student.kelas + " pada program " + student.program + " dengan no batch " + student.batch;    
