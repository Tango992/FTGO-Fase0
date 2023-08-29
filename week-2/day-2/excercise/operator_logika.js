var a = 20;
var b = 18;

var benar = a > b;
var salah = a < b;

// AND
var hasil = benar && salah;
document.write(`${benar} && ${salah} = ${hasil} <br>`)

// or
hasil = benar || salah;
document.write(`${benar} || ${salah} = ${hasil} <br>`)

// !
hasil = !benar
document.write(`!${benar} = ${hasil} <br>`)
