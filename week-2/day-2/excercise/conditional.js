// var totalBelanja = prompt("Total belanja?", 0)

// // Sering disebut dengan blok yang diawali dengan tanda kurawal
// if (totalBelanja > 100000) {
//     document.write("<h2>Selamat anda mendapatkan hadiah!</h2>");
// } else {
//     document.write("<h2>Maaf, anda kurang beruntung!</h2>");
// }

// document.write("<p>Terima kasih telah berbelanja di toko kami.</p>")

// var password = prompt("Password:");

// if (password == "kopi") {
//     document.write("<h2>Selamat datang di halaman member!</h2>");
// } else {
//     document.write("<h2>Password salah, coba lagi!</h2>");
// };

// document.write(`<p>Terima kasih!</p>`)

var input = prompt("Grade:");
var grade;

// Kalau hanya 1 baris perintah, tidak perlu kurung kurawal,
// dapat diratakan dalam satu baris
// contoh if (input >= 80) grade = "A"
// else if dst dst

if (input >= 80) {
    grade = "A";
} else if (input >= 70) {
    grade = "B+";
} else if (input >= 60) {
    grade = "B";
} else if (input >= 0) {
    grade = "F";
} else {
    grade = "Not a valid input";
}

document.write(`<h2>Grade anda = ${grade}</h2>`);