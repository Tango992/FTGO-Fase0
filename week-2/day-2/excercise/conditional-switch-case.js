// var jawab = prompt("Kamu sedang beruntung! Silakan pilih hadiah 1 sampai 5!");
// var hadiah = "";

// switch(jawab){
//     case "1":
//         hadiah = "Smartphone";
//         break;
//     case "2":
//         hadiah = "Sticker";
//         break;
//     case "3":
//         hadiah = "Tumblr";
//         break;
//     case "4":
//         hadiah = "Kaos";
//         break;
//     case "5":
//         hadiah = "Voucher";
//         break;
//     default:
//         document.write("<p>Anda memilih diluar angka 1-5</p>");
// }

// if(hadiah === ""){
//     document.write("<p>Kamu gagal mendapatkan hadiah</p>");
// } else {
//     document.write(`<h2>Selamat kamu mendapatkan ${hadiah}!`);
// };

var username = prompt("Username:");
var password = prompt("Password");

if (username == "ftgo002") {
    if (password == "kopi") {
        document.write("<h2>Selamat datang di halaman member!</h2>");
    } else {
        document.write("<h2>Password salah, coba lagi!</h2>");
    }
} else {
    document.write("<p>Anda tidak terdaftar!</p>");
};